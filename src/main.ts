import "@fontsource-variable/inter";
import "@fontsource-variable/newsreader";
import "./style.css";

document.documentElement.classList.add("js");

const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-filter]"));
const projects = Array.from(document.querySelectorAll<HTMLElement>("[data-project]"));
const filterStatus = document.querySelector<HTMLElement>("[data-filter-status]");

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter ?? "all";
    let visibleProjects = 0;

    for (const project of projects) {
      const categories = project.dataset.categories?.split(" ") ?? [];
      const isVisible = selectedFilter === "all" || categories.includes(selectedFilter);
      project.hidden = !isVisible;
      if (isVisible) visibleProjects += 1;
    }

    for (const filterButton of filterButtons) {
      filterButton.setAttribute("aria-pressed", String(filterButton === button));
    }

    if (filterStatus) {
      filterStatus.textContent = `${visibleProjects} ${visibleProjects === 1 ? "project" : "projects"}`;
    }
  });
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

if (reducedMotion || !("IntersectionObserver" in window)) {
  for (const item of revealItems) item.classList.add("is-visible");
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );

  for (const item of revealItems) revealObserver.observe(item);
}

const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));

const setActiveSection = (sectionId: string) => {
  for (const link of navLinks) {
    const isActive = link.hash === `#${sectionId}`;
    link.toggleAttribute("aria-current", isActive);
    if (isActive) {
      link.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }
};

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target.id) setActiveSection(visibleEntry.target.id);
    },
    { rootMargin: "-20% 0px -60%", threshold: [0, 0.15, 0.4] },
  );

  for (const section of sections) sectionObserver.observe(section);
}
