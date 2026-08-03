const tabsRoot = document.querySelector("[data-tabs]");

if (tabsRoot) {
  const buttons = Array.from(tabsRoot.querySelectorAll("[data-tab]"));
  const panels = Array.from(tabsRoot.querySelectorAll("[data-panel]"));

  const activateTab = (target) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.tab === target;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === target;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
    button.addEventListener("keydown", (event) => {
      const currentIndex = buttons.indexOf(button);
      let nextIndex = currentIndex;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % buttons.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = buttons.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      buttons[nextIndex].focus();
      activateTab(buttons[nextIndex].dataset.tab);
    });
  });

  activateTab(buttons.find((button) => button.classList.contains("is-active"))?.dataset.tab || buttons[0].dataset.tab);
}
