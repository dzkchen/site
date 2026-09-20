import { chromium, type Page } from "playwright-core";

const baseUrl = process.env.SITE_URL ?? "http://127.0.0.1:5173";
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--disable-background-networking", "--disable-component-update", "--no-first-run"],
});

const assertPage = async (page: Page) => {
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const structure = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    sections: document.querySelectorAll("[data-section]").length,
    tracks: document.querySelectorAll(".track-list li").length,
    contacts: document.querySelectorAll(".contact-links a").length,
    projects: document.querySelectorAll("[data-project]").length,
  }));

  if (structure.scrollWidth > structure.clientWidth) {
    throw new Error(`Horizontal overflow: ${structure.scrollWidth}px > ${structure.clientWidth}px`);
  }
  if (structure.sections !== 6) throw new Error(`Expected 6 sections, found ${structure.sections}`);
  if (structure.tracks !== 7) throw new Error(`Expected 7 tracks, found ${structure.tracks}`);
  if (structure.contacts !== 4) throw new Error(`Expected 4 contact links, found ${structure.contacts}`);
  if (structure.projects !== 7) throw new Error(`Expected 7 projects, found ${structure.projects}`);

  await page.getByRole("button", { name: "systems", exact: true }).click();
  const filteredCount = await page.locator("[data-project]:visible").count();
  const status = await page.locator("[data-filter-status]").textContent();
  if (filteredCount !== 5 || status?.trim() !== "5 projects") {
    throw new Error(`Systems filter mismatch: ${filteredCount} visible, status "${status}"`);
  }
};

const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobilePage.emulateMedia({ reducedMotion: "reduce" });
await assertPage(mobilePage);
await mobilePage.reload({ waitUntil: "networkidle" });
await mobilePage.evaluate(() => document.fonts.ready);
await mobilePage.evaluate(() => window.scrollTo(0, 0));
await mobilePage.screenshot({ path: "/private/tmp/david-site-mobile-final.png" });
await mobilePage.locator("#side-b").scrollIntoViewIfNeeded();
await mobilePage.waitForFunction(() =>
  document.querySelector<HTMLAnchorElement>('a[href="#side-b"]')?.hasAttribute("aria-current"),
);
await mobilePage.screenshot({ path: "/private/tmp/david-site-mobile-side-b-final.png" });

const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await desktopPage.emulateMedia({ reducedMotion: "reduce" });
await assertPage(desktopPage);
await desktopPage.reload({ waitUntil: "networkidle" });
await desktopPage.evaluate(() => document.fonts.ready);
await desktopPage.evaluate(() => window.scrollTo(0, 0));
await desktopPage.screenshot({ path: "/private/tmp/david-site-desktop-final.png" });
await desktopPage.locator("#work").scrollIntoViewIfNeeded();
await desktopPage.waitForFunction(() =>
  document.querySelector<HTMLAnchorElement>('a[href="#work"]')?.hasAttribute("aria-current"),
);
await desktopPage.screenshot({ path: "/private/tmp/david-site-desktop-work-final.png" });

await browser.close();

console.log("Responsive layout checks passed at 390×844 and 1440×1000.");
