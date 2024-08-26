// HeaderMarqueLogo
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const marqueeText = document.querySelector(".H1logo");
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // Scrolling down - tilt to the right
    marqueeText.style.transform = "skewX(20deg)";
  } else if (scrollTop < lastScrollTop) {
    // Scrolling up - return to default italic
    marqueeText.style.transform = "skewX(-20deg)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scrolling
});

// HeaderMarqueLogo
