// ==============================================
// Main JavaScript - Neo-Brutalism Gallery
// ==============================================

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebarClose = document.getElementById("sidebarClose");
  const sidebarLinks = document.querySelectorAll(".sidebar__link");
  const filterCategories = document.querySelectorAll(".filters__category");
  const likeButtons = document.querySelectorAll(".card__action-btn");

  // ==============================================
  // Mobile Menu Toggle
  // ==============================================

  function openSidebar() {
    sidebar.classList.add("sidebar--open");
    sidebarOverlay.classList.add("sidebar-overlay--visible");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    sidebar.classList.remove("sidebar--open");
    sidebarOverlay.classList.remove("sidebar-overlay--visible");
    document.body.style.overflow = "";
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", openSidebar);
  }

  if (sidebarClose) {
    sidebarClose.addEventListener("click", closeSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebar);
  }

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });

  // ==============================================
  // Filter Categories Toggle
  // ==============================================

  filterCategories.forEach((category) => {
    category.addEventListener("click", () => {
      // Remove active class from all
      filterCategories.forEach((cat) =>
        cat.classList.remove("filters__category--active"),
      );
      // Add active class to clicked
      category.classList.add("filters__category--active");
    });
  });

  // ==============================================
  // Like Button Toggle
  // ==============================================

  likeButtons.forEach((btn) => {
    if (btn.getAttribute("aria-label") === "좋아요") {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        btn.classList.toggle("card__action-btn--liked");

        const svg = btn.querySelector("svg");
        if (btn.classList.contains("card__action-btn--liked")) {
          svg.setAttribute("fill", "currentColor");
        } else {
          svg.setAttribute("fill", "none");
        }
      });
    }
  });

  // ==============================================
  // Header Scroll Effect
  // ==============================================

  let lastScrollY = window.scrollY;

  function handleHeaderScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      header.style.boxShadow = "0 4px 0 #1a1a1a";
    } else {
      header.style.boxShadow = "";
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });

  // ==============================================
  // Card Hover Sound Effect (Optional)
  // ==============================================

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Could add subtle animation or sound here
    });
  });

  // ==============================================
  // Navigation Link Active State
  // ==============================================

  const navLinks = document.querySelectorAll(".header__nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((l) => l.classList.remove("header__nav-link--active"));
      link.classList.add("header__nav-link--active");
    });
  });

  // ==============================================
  // Search Input Focus Effect
  // ==============================================

  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("focus", () => {
      searchInput.parentElement.style.transform = "scale(1.02)";
    });

    searchInput.addEventListener("blur", () => {
      searchInput.parentElement.style.transform = "";
    });
  }

  // ==============================================
  // Console Welcome Message
  // ==============================================

  console.log(
    "%c 🎨 Artboard - Creative Gallery ",
    "background: #ffcc00; color: #1a1a1a; padding: 10px 20px; border: 3px solid #1a1a1a; font-size: 14px; font-weight: bold;",
  );
  console.log(
    "%c Neo-Brutalism Design ",
    "background: #3d5afe; color: white; padding: 5px 10px; border: 2px solid #1a1a1a;",
  );
});
