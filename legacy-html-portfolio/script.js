const darkModeToggle = document.getElementById("darkModeToggle");
const changer = document.getElementById("changer");
const menuToggle = document.getElementById("click");
const navLinks = document.querySelectorAll(".nav-links a");
const body = document.body;
const cursorBot = document.querySelector(".cursor-bot") || (() => {
  const bot = document.createElement("div");
  bot.className = "cursor-bot";
  bot.setAttribute("aria-hidden", "true");
  bot.innerHTML = '<img src="./mini-bot.svg" alt="" />';
  document.body.appendChild(bot);
  return bot;
})();
const projectCards = document.querySelectorAll(".project-card");
const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-media, .ai-lab-section, .focus-item, .highlight-section, .skill-card, .project-card, .about-immersive, .about-panel"
  + ", .about-visual, .project-showcase, .ai-page-hero, .ai-stack-section article"
);

const setThemeIcon = (isDark) => {
  if (!changer) return;
  changer.classList.toggle("bxs-sun", !isDark);
  changer.classList.toggle("bxs-moon", isDark);
};

const isDarkMode = localStorage.getItem("darkMode") === "enabled";

if (isDarkMode) {
  body.classList.add("dark-mode");
  if (darkModeToggle) darkModeToggle.checked = true;
}

setThemeIcon(isDarkMode);

if (darkModeToggle) {
  darkModeToggle.addEventListener("change", () => {
    const isDark = darkModeToggle.checked;
    body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    setThemeIcon(isDark);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle) menuToggle.checked = false;
  });
});

if (cursorBot && window.matchMedia("(pointer: fine)").matches) {
  let botX = -120;
  let botY = -120;
  let targetX = -120;
  let targetY = -120;
  let isActive = false;

  const moveBot = () => {
    botX += (targetX - botX) * 0.12;
    botY += (targetY - botY) * 0.12;
    cursorBot.style.transform = `translate3d(${botX}px, ${botY}px, 0)`;
    requestAnimationFrame(moveBot);
  };

  window.addEventListener("mousemove", (event) => {
    targetX = event.clientX + 22;
    targetY = event.clientY + 20;
    if (!isActive) {
      cursorBot.classList.add("is-active");
      isActive = true;
    }
  });

  window.addEventListener("mouseleave", () => {
    cursorBot.classList.remove("is-active");
    isActive = false;
  });

  moveBot();
}

if (projectCards.length && window.matchMedia("(pointer: fine)").matches) {
  projectCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const bounds = card.getBoundingClientRect();
      const relX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const relY = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty("--tilt-x", `${relY * -5}deg`);
      card.style.setProperty("--tilt-y", `${relX * 5}deg`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
