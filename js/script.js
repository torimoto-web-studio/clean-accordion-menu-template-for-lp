document.querySelectorAll("[data-accordion]").forEach((accordion) => {
  const headers = accordion.querySelectorAll(".accordion__header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.parentElement.nextElementSibling;
      const isOpen = content.classList.contains("is-open");

      headers.forEach((h) => {
        h.classList.remove("is-active");
        h.setAttribute("aria-expanded", "false");
        const c = h.parentElement.nextElementSibling;
        c.classList.remove("is-open");
        c.setAttribute("aria-hidden", "true");
      });

      if (!isOpen) {
        header.classList.add("is-active");
        header.setAttribute("aria-expanded", "true");
        content.classList.add("is-open");
        content.setAttribute("aria-hidden", "false");
      }
    });

    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === "") {
        e.preventDefault();
        header.click();
      }
    });
  });
});
