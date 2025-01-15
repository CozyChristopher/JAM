// Gallery data array
const items = [];

/**

* Code from friend
* He told me that there was an easier way to display a gallery using javascript where you didn't need to write repetitive html code.
* This script automates html, I only need to input the image link, description and tutorial link.

* Accessed: 16 June, 2023

*/

$(document).ready(function () {
  const gallery = $("#gallery");

  const displayItems = () => {
    if (items.length === 0) {
      gallery.html('<h1 style="font-size: 3rem; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%;">Come back after the celebration for some photos</h1>');
      return;
    }

    let display = items.map((item) => {
      return `<div class="describeimg">
          <img src="${item.img}" alt="Barbershop" /> <br/>
          <span class="galimg"> ${item.desc} </span>
          <br/>
          Tutorial: <a href="${item.tutorial}">${item.desc}</a>
        </div>`;
    });
    display = display.join("");
    gallery.html(display);
  };

  // Fades the modal in
  const focusImage = (imgSrc) => {
    const modal = $(`<div id="gallery-modal">
    <img src="${imgSrc}" alt="" />
  </div>`);
    $("body").append(modal);

    modal.on("click", () => {
      modal.fadeOut(() => {
        modal.remove();
      });
    });
  };

  // Loop through all images and create modal on click
  const init = () => {
    displayItems();
    const imgs = $("#gallery img");
    imgs.each((index, img) => {
      $(img).on("click", () => {
        focusImage(img.src);
      });
    });
  };

  init();
});
