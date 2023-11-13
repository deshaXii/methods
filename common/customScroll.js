const handleScroll = () => {
  const targetElement = document.querySelector(".submenu");

  const scrollThreshold = 300;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > scrollThreshold) {
      targetElement.classList.add("shadowed");
    } else {
      targetElement.classList.remove("shadowed");
    }
  });

  window.addEventListener("scroll", function () {
    const navSection = document.querySelector(".nav_padding");
    const navbarElement = document.querySelector(".navbar");
    const bord = document.querySelector(".bord");

    if (window.scrollY >= 300) {
      navSection.classList.add("nav_active");
      navbarElement.classList.add("no-border");
      bord.style.display = "none";
    } else {
      navSection.classList.remove("nav_active");
      navbarElement.classList.remove("no-border");
      bord.style.display = "block";
    }
  });
};

export default handleScroll;
