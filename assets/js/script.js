$(".banners").flickity({
  cellAlign: "left",
  contain: false,
  fade: true,
  wrapAround: true,
  pageDots: false,
  autoPlay: 5000
});

$(".carousel").flickity({
  cellAlign: "center",
  wrapAround: true,
  contain: false,
  pageDots: false,
  pauseAutoPlayOnHover: false,
  autoPlay: 5000
});

document.querySelectorAll(".to-top").forEach(e => {
  e.addEventListener("click", function() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
});

document.querySelectorAll(".data-bg-img").forEach(el => {
  let url = el.getAttribute("data-bg");
  if (url) {
    el.style.backgroundImage = "url('" + url + "')";
  }
});

// SCROLL THROTTLING TO AVOID UNNECESSARY SCROLL EVENTS
let ticking = false;
window.addEventListener("scroll", function(e) {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 200) {
        document.querySelector(".to-top").classList.add("hide");
      } else {
        document.querySelector(".to-top").classList.remove("hide");
      }
      ticking = false;
    });

    ticking = true;
  }
});

// DETECT STICKY HEADER
var observer = new IntersectionObserver(
  function(entries) {
    if (entries[0].intersectionRatio === 0)
      document
        .querySelector(".header-l1")
        .classList.add("active-sticky");
    else if (entries[0].intersectionRatio === 1)
      document
        .querySelector(".header-l1")
        .classList.remove("active-sticky");
  },
  { threshold: [0, 1] }
);

observer.observe(document.querySelector("#top"));
