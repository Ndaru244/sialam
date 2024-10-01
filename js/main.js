document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section, header");
  const navbarItems = document.querySelectorAll(".navbar-item");

  const options = {
    root: null,
    threshold: 0.7,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.getAttribute("id");
      const navbarItem = document.querySelector(
        `.navbar-item[href="#${sectionId}"]`
      );

      if (navbarItem) {
        if (entry.isIntersecting) {
          navbarItem.classList.add("is-active");
        } else {
          navbarItem.classList.remove("is-active");
        }
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
