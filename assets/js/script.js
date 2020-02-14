var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);

$(".banners").flickity({
  cellAlign: "left",
  contain: false,
  fade: true,
  wrapAround: true,
  pageDots: false,
  autoPlay: 2000,
  prevNextButtons: false,
});

$(".carousel").flickity({
  cellAlign: "center",
  wrapAround: true,
  contain: false,
  pageDots: false,
  pauseAutoPlayOnHover: false,
  autoPlay: 5000
});

queryAll(".to-top").forEach(e => {
  e.addEventListener("click", function() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
});

queryAll(".data-bg-img").forEach(el => {
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
        query(".to-top").classList.add("hide");
      } else {
        query(".to-top").classList.remove("hide");
      }
      ticking = false;
    });

    ticking = true;
  }
});

// DETECT STICKY HEADER
// var observer = new IntersectionObserver(
//   function(entries) {
//     if (entries[0].intersectionRatio === 0)
//       query(".header-l2").classList.add("active-sticky");
//     else if (entries[0].intersectionRatio === 1)
//       query(".header-l2").classList.remove("active-sticky");
//   },
//   { threshold: [0, 1] }
// );

// observer.observe(query("#top"));

// SIDEBAR TOGGLE

queryAll(".sidebar-toggle").forEach(function(btn) {
  btn.addEventListener("click", function() {
    var sidebar = query(".sidebar");
    var scrollWidth = (window.innerWidth - document.documentElement.clientWidth);
    query('html').style.paddingRight = scrollWidth + 'px';
    query('.header-l1').style.paddingRight = scrollWidth + 'px';
    var activeClass = "sidebar-active";
    if(sidebar.classList.contains(activeClass)){
      sidebar.classList.remove(activeClass);
      query('html').style.overflow = "auto";
    } else {
      sidebar.classList.add(activeClass)
      query('html').style.overflow = "hidden";
    }
  });
});
