/**

* Code for slideshow initally adapted from
* https://www.w3schools.com/howto/howto_js_slideshow.asp

* Reconfigured with jquery and added slide animations rather than fading animations

* Accessed: 20 June, 2023

*/

const slidesData = [
  {
    src: "https://i.pinimg.com/originals/e5/32/9f/e5329f68b4e412dfd6868848d7906a2e.jpg",
    alt: "Best Clippers of 2023!",
    link: "https://www.youtube.com/watch?v=gAxqceAl2Fo"
  },
  {
    src: "https://media.gq-magazine.co.uk/photos/60227c068e3f516f2e2e62d5/16:9/pass/Hair-scissors-lead.jpg",
    alt: "Find your Shears!",
    link: "https://www.youtube.com/watch?v=mdcuArOi-0g"
  },
  {
    src: "https://i.ytimg.com/vi/v0TKMU6t6Ng/maxresdefault.jpg",
    alt: "Best Trimmers of 2023!",
    link: "https://www.youtube.com/watch?v=nSe5Hxj5IJk"
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
