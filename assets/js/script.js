$(".banners").flickity({
  // options
  cellAlign: "left",
  contain: false,
  fade: true,
  wrapAround: true,
  pageDots: false,
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
