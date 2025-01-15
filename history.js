// Timeline data array
const timelineData = [
  {
    year: "Early 1900s",
    description:
      "In the early 1900s, hair was worn short and well-groomed. Side parts were popular and hair was usually slicked down ussing pomade or bear grease. \
      During World War I, military regulations kept hair short.",
    img: "https://www.dmarge.com/wp-content/uploads/2014/05/Rudolph-Valentino-1920s-Mens-Hairstyle-610x440.jpg",
  },
  {
    year: "1940s",
    description:
      "Hair during this decade was heavily influenced by the ongoing war. Popular hairstyles were easy-to-maintain. This included crew cuts, slick backs \
      and comb-overs. Mustaches were also popular, especially amoung military personnel.",
    img: "https://cdn.shopify.com/s/files/1/0434/4749/files/Grant__Cary__Suspicion__01_Crisco_edit_grande.jpg?v=1487592738",
  },
  {
    year: "1950s",
    description:
      "In the 1950s, men's hairstyles became more stylish and youthful. Pompadours (as pictured), Quiffs, Side Parts became the most prevalent hairstyles.",
    img: "https://hips.hearstapps.com/hmg-prod/images/elvis-presley-poses-with-guitar-in-a-promotional-still-for-news-photo-1680803731.jpg?crop=1xw:0.59903xh;center,top&resize=1200:*",
  },
  {
    year: "1960s",
    description:
      "The 1960s saw a diverse range of hairstyles. During this decade, men began wearing their hair messier letting their sideburns grow. The Mop Top cut (as pictured), \
      became popular from the influence of the Beatles. Other popular hairstyles included Mod cuts, Shag haircuts and Surfer hair",
    img: "https://npr.brightspotcdn.com/48/83/ca80d89b46b49adc47df5d5223a1/ap6311010216.jpg",
  },
  {
    year: "1970s",
    description:
      "Similar to the 1960s, Shag haircuts were still prevalent in the west. Disco heavily influenced hairstyles during this decade. \
       The pompadour made a comeback, mullets began gaining popularity and facial hair became prominent amoung men. \
       Afros (which became popular in the late 60's) were very popular amoung black people. It was a symbol of their pride and expression of their identity.",
    img: "https://hairbybrian.us/uploads/3/4/8/5/34852694/70s-haircuts_orig.jpg",
  },
  {
    year: "1980s",
    description:
      "The 1980s were known for their bold and vibrant styles. Popular hairstyles included mullets (as pictured), mohawks/faux hawks, flat tops and perms with a wet look.",
    img: "https://i.pinimg.com/736x/6a/06/f6/6a06f610dc3666df8caa590cf487cc26--s-hairstyles-mohawk-hairstyles.jpg",
  },
  {
    year: "1990s",
    description:
      "The 1990s was a diverse decade when it came to hairstyles. Grunge hair became popularized by bands like Nirvana. Other common hairstyles included \
      middle parts, frosted tips, braids, fades, surfer hair. Due to the diversity of the culture, the various communities and influences, men's hairstyles varied greatly.",
    img: "https://heartafact.com/wp-content/uploads/2022/02/90s-Hairstyles-Men.jpg",
  },
  {
    year: "2000s",
    description:
      "Keeping up the theme of diversity from the previous decade, hairstyles in this decade were just as unique as the last. Frosted tips, mop tops(as pictured) \
      and spiky hair were prevalent. Emo culture also began having a strong influence with many men sporting longer emo and scene hairtsyles.",
    img: "https://www.liveabout.com/thmb/Fgl8nzUOriBV-f7wpvMHxZnKDlo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-86223937-5aaffd99c673350036935e46.jpg",
  },
  {
    year: "2010s",
    description:
      "In the 2010s, hair styles were still diverse but a few prominent cuts made their mark in men's hairstyles in the west. Fades were becoming more and more popular and man buns \
      (as pictured) became trendy for men with longer hair.",
    img: "https://i.pinimg.com/1200x/f0/94/c5/f094c5a3fd3ef407a613b5dd8d2c15b5.jpg",
  },
  {
    year: "2020s",
    description:
      "The current decade has already seen many waves of trendy hairstyles amoung men. Mullets, middle parts, perms, messy hair, textured fringes have all had their time in \
      the spotlight. Any of the previous hairstyles accompanied by a fade (as pictured) have become the most popular requests. \
      In this decade there has also been a pattern of men embracing their natural hair patterns and thus showcasing the beauty in different hair textures, and lengths.",
    img: "https://machohairstyles.com/wp-content/uploads/2017/03/afro-taper-fade-with-wave.jpg.webp",
  },
];

$(document).ready(function () {
  //Auto-generates html code for timeline data
  const displayItems = () => {
    const gallery = $("#history");
    console.debug("displayItems,", gallery);
    let display = timelineData.map((item) => {
      return `<li>
                <div>
                  <img src="${item.img}" alt="Timeline Photo">
                  <time>${item.year}</time>
                  <p>${item.description}</p>
                </div>
              </li>`;
    });
    display = display.join("");
    gallery.html(display);
  };

  displayItems();

  /**
  
  * Code for timeline adapted from
  * https://alvarotrigo.com/blog/html-css-timelines/
  
  * Accessed: 12 June, 2023
  
  */

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
