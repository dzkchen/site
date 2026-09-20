import { chromium, type Page } from "playwright-core";

const baseUrl = process.env.SITE_URL ?? "http://127.0.0.1:5173";
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--disable-background-networking", "--disable-component-update", "--no-first-run"],
});

const waitForReady = async (page: Page) => {
  await page.waitForFunction(
    () => getComputedStyle(document.querySelector<HTMLElement>(".project-list")!).display === "grid",
  );
  await page.evaluate(() => document.fonts.ready);
  await page.locator(".landscape img").evaluate((image: HTMLImageElement) => image.decode());
};

const assertPage = async (page: Page) => {
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await waitForReady(page);

  const structure = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    sections: document.querySelectorAll("[data-section]").length,
    tracks: document.querySelectorAll(".track-list li").length,
    contacts: document.querySelectorAll(".intro-section .inline-links a").length,
    projects: document.querySelectorAll("[data-project]").length,
    projectLinks: Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-project] h3 a")).map(
      (link) => link.href,
    ),
    centerDelta: Math.abs(
      document.querySelector<HTMLElement>(".site-shell")!.getBoundingClientRect().left +
        document.querySelector<HTMLElement>(".site-shell")!.getBoundingClientRect().width / 2 -
        window.innerWidth / 2,
    ),
  }));

  if (structure.scrollWidth > structure.clientWidth) {
    throw new Error(`Horizontal overflow: ${structure.scrollWidth}px > ${structure.clientWidth}px`);
  }
  if (structure.sections !== 5) throw new Error(`Expected 5 sections, found ${structure.sections}`);
  if (structure.tracks !== 7) throw new Error(`Expected 7 tracks, found ${structure.tracks}`);
  if (structure.contacts !== 4) throw new Error(`Expected 4 contact links, found ${structure.contacts}`);
  if (structure.projects !== 6) throw new Error(`Expected 6 projects, found ${structure.projects}`);
  if (structure.projectLinks.length !== 6 || structure.projectLinks.some((link) => !link.startsWith("https://github.com/"))) {
    throw new Error("Every project must link to its GitHub repository");
  }
  if (structure.centerDelta > 1) throw new Error(`Main content is off-center by ${structure.centerDelta}px`);

  await page.getByRole("button", { name: /My Kitchen/ }).click();
  const playerSource = await page.locator("[data-player]").getAttribute("src");
  const playerStatus = await page.locator("[data-player-status]").textContent();
  if (!playerSource?.includes("5IFi8YfugyA9JBdfHlaMUP") || !playerStatus?.includes("My Kitchen")) {
    throw new Error("Selecting My Kitchen did not update the Spotify player");
  }
};

const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobilePage.emulateMedia({ reducedMotion: "reduce" });
await assertPage(mobilePage);
await mobilePage.reload({ waitUntil: "domcontentloaded" });
await waitForReady(mobilePage);
await mobilePage.evaluate(() => window.scrollTo(0, 0));
await mobilePage.screenshot({ path: "/private/tmp/david-site-mobile-final.png" });
await mobilePage.locator("#music").scrollIntoViewIfNeeded();
await mobilePage.waitForTimeout(2_000);
await mobilePage.screenshot({ path: "/private/tmp/david-site-mobile-music-final.png" });

const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await desktopPage.emulateMedia({ reducedMotion: "reduce" });
await assertPage(desktopPage);
await desktopPage.reload({ waitUntil: "domcontentloaded" });
await waitForReady(desktopPage);
await desktopPage.evaluate(() => window.scrollTo(0, 0));
await desktopPage.screenshot({ path: "/private/tmp/david-site-desktop-final.png" });
await desktopPage.locator("#projects").scrollIntoViewIfNeeded();
await desktopPage.screenshot({ path: "/private/tmp/david-site-desktop-projects-final.png" });
await desktopPage.locator("#music").scrollIntoViewIfNeeded();
const musicColumnWidths = await desktopPage.evaluate(() => ({
  player: document.querySelector<HTMLElement>(".player-wrap")!.getBoundingClientRect().width,
  tracks: document.querySelector<HTMLElement>(".track-list")!.getBoundingClientRect().width,
}));
if (Math.abs(musicColumnWidths.player - musicColumnWidths.tracks) > 1) {
  throw new Error(
    `Music columns differ by ${Math.abs(musicColumnWidths.player - musicColumnWidths.tracks)}px`,
  );
}
await desktopPage.screenshot({ path: "/private/tmp/david-site-desktop-music-final.png" });

await browser.close();

console.log("Responsive layout checks passed at 390×844 and 1440×1000.");
