/**
 * Animations vanilla : reveal au scroll + compteurs animés.
 * Tout est neutralisé si l'utilisateur préfère réduire les animations.
 */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

/* ------------------------------------------------------------------ */
/* Reveal au scroll                                                    */
/* ------------------------------------------------------------------ */
function initReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>(".reveal");

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const delay = Number(el.dataset.delay ?? 0);
        window.setTimeout(() => el.classList.add("is-visible"), delay);
        obs.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------------------ */
/* Compteurs animés                                                    */
/* ------------------------------------------------------------------ */
const numberFormatter = new Intl.NumberFormat("fr-FR");

function animateCounter(el: HTMLElement): void {
  const target = Number(el.dataset.counter ?? 0);
  const suffix = el.dataset.suffix ?? "";
  const duration = 1400;
  const start = performance.now();

  function tick(now: number): void {
    const progress = Math.min((now - start) / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = numberFormatter.format(value) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>("[data-counter]");

  if (prefersReducedMotion) {
    counters.forEach((el) => {
      const target = Number(el.dataset.counter ?? 0);
      el.textContent =
        numberFormatter.format(target) + (el.dataset.suffix ?? "");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target as HTMLElement);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0 },
  );

  counters.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------------------ */
/* Menu mobile                                                         */
/* ------------------------------------------------------------------ */
function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");
  if (!toggle || !menu) return;

  const setOpen = (open: boolean) => {
    menu.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    setOpen(menu.dataset.open !== "true");
  });

  menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => setOpen(false)),
  );
}

/* ------------------------------------------------------------------ */
/* Navbar : ombre au scroll                                            */
/* ------------------------------------------------------------------ */
function initNavbarScroll(): void {
  const nav = document.querySelector<HTMLElement>("[data-navbar]");
  if (!nav) return;
  const onScroll = () => {
    nav.dataset.scrolled = String(window.scrollY > 16);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ------------------------------------------------------------------ */
function init(): void {
  initReveal();
  initCounters();
  initMobileMenu();
  initNavbarScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
