// Timeline data array
const timelineData = [
  {
    year: "March 2019",
    description:
      "First date: Mitch lured Julia to a ravine by East Credit, Mississauga. It was love (« I think I like this one ») at first sight (several dates in)! \
      It’s a good thing Mitch just a super chill dude, cause this story would’ve had a very different ending… ",
    img: "img/OurStory/JuliaMitchYoung.jpg",
  },
  {
    year: "2020",
    description:
      "The world shuts down…",
      img: "img/OurStory/2020.jpg",
  },
  {
    year: "2021",
    description:
      "… but Mitch and Julia's love for each other only grows. ",
    img: "img/OurStory/2021.jpg"
  },
  {
    year: "2022",
    description:
      "Jax enters chat. \
      One small step man, one big leap for Julia and Mitch… they’re homeowners!",
    img: "img/OurStory/2022.jpg"
  },
  {
    year: "2023",
    description:
      "Mitch takes Julia back downstream from the ravine where they shared their first moments together… and drops a deuce!… a BOMB! … drops THE QUESTION! proposes to Julia",
    img: "img/OurStory/2023.jpg"
  },
  {
    year: "October 2023",
    description:
      "They tied the knot in a very intimate wedding!",
    img: "img/OurStory/Oct2023.jpg"
  },
  {
    year: "2024",
    description:
      "A year of new beginnings, new challenges. Life looks a bit brighter with the newly wed goggles on. And boy, is it fun with the love of your life!",
    img: "img/OurStory/2024.jpg"
  },
  {
    year: "October 2024",
    description:
      "Milestone! Happy First Anniversary!",
    img: "img/OurStory/Oct2024.jpg"
  },
  {
    year: "2025",
    description:
      "Friends and family gather to celebrate Julia and Mitch for a weekend to remember!",
    img: "img/OurStory/2025.jpg"
  }
];

$(document).ready(function () {
  //Auto-generates html code for timeline data
  const displayItems = () => {
    const gallery = $("#history");
    console.debug("displayItems,", gallery);
    let display = timelineData.map((item) => {
      return `<li>
                <div>
                  <img src="${item.img}" alt=" ">
                  <time>${item.year}</time>
                  <p>${item.description}</p>
                </div>
              </li>`;
    });
    display = display.join("");
    gallery.html(display);
  };

  displayItems();

  // checks if the selected decade is partially in view
  function isElementInScrollView(element) {
    let rect = element.getBoundingClientRect();
    return (
      // rect.top >= -40 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight + 40 ||
          document.documentElement.clientHeight + 40) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function loadTimelineData() {
    let items = document.querySelectorAll("#history li");

    for (let i = 0; i < items.length; i++) {
      if (isElementInScrollView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", loadTimelineData);
  window.addEventListener("resize", loadTimelineData);
  window.addEventListener("scroll", loadTimelineData);
});
