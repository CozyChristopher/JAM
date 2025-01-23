/**

* Code for slideshow initally adapted from
* https://www.w3schools.com/howto/howto_js_slideshow.asp

* Reconfigured with jquery and added slide animations rather than fading animations

* Accessed: 20 June, 2023

*/

const slidesData = [
  {
    src: "img/engagement_backside.JPG",
    alt: "Engagement Backside",
  },
  {
    src: "img/IMG-0600.JPG",
    alt: "Rose",
  },
  {
    src: "img/IMG-0250.JPG",
    alt: "Kissing",
  }
  {
    src: "img/IMG-1040.JPG",
    alt: "Dancing",
  }
];

$(document).ready(function () {
  const initSlides = () => {
    const slides = $("#slides");

    // Put in all the slides
    slidesData.forEach((s, i) => {
      slides.append(`<div class="slide" style="transform: translateX(${i * 100}%)">
      <img src="${s.src}" alt="${s.alt}" style="width:100%"> 
      
    </div>`);
    });

    showSlides(0);
  };

  initSlides();

  // Displays slides, text and appropriate dot
  function showSlides(n) {
    if (n < 0 || n > slidesData.length - 1) return;

    const slides = document.getElementById("slides");
    slides.style.transform = `translateX(-${n * 100}%)`;

    const slideLink = $("#slide-link");
    slideLink.text(slidesData[n].alt);
    slideLink.attr("href", slidesData[n].link);

    // Remove the active class from all dots except current slide dot
    $("#dots").children().removeClass("active");
    $("#dots").children().eq(n).addClass("active");
  }

  let slideIndex = 0;

  $(".prev").click(function () {
    const newIndex = slideIndex - 1;
    if (newIndex < 0) {
      return;
    }

    slideIndex = newIndex;
    showSlides(newIndex);
  });

  $(".next").click(function () {
    const newIndex = slideIndex + 1;
    if (newIndex > slidesData.length - 1) {
      return;
    }

    slideIndex = newIndex;
    showSlides(newIndex);
  });

  $(".dot").click(function () {
    showSlides((slideIndex = $(this).index()));
  });
});
