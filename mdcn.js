//Active Nav menu style
/*
const menu = document.getElementById("menu");
const list = menu.getElementsByTagName("a");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", " ");
    this.className += "active";
  });
}
*/

/*
======================================== 
Sticky navbar
========================================
*/

// Get the navbar
var lowerNavbar = document.querySelector(".lower-nav");
var scrollText = document.querySelector("#latest-scroll-news-section");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 1) {
    lowerNavbar.classList.add("sticky");
    scrollText.classList.add("stickytest");
  } else {
    lowerNavbar.classList.remove("sticky");
    scrollText.classList.remove("stickytest");
  }
});

//slider style
const backgroundImages = [
  {
    text: "maintains  register of persons licencsed to practice medicine, dentistry and alternative-medicine in nigeria",
    image: "url('/images/registrar-appointment.jpg')",
  },
  {
    text: "makes policies on medicine, dentistry and alternative medicine practice in nigeria",
    image: "url('/images/practicing.jpg')",
  },
  {
    text: "Determines the standard of knowledge and training of persons to practice as doctors and dentists",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/council-meeting.jpg')",
  },

  {
    text: "REGULATes THE PRACTICE OF MEDICINE DENTISTRY AND ALTERNATIVE MEDICINE IN NIGERIA",
    image:
      " linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/tribunal2.jpg')",
  },
  {
    text: "administers oath of practice on newly graduated doctors and dentists in nigeria",
    image: "url('/images/induction.jpg')",
  },

  {
    text: "Disciplines erring medical and dental practitioners",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/discipline.jpg')",
  },
  {
    text: "Medical and dental practitioners disciplinary tribunal",
    image: "url('/images/registrar-handover.jpg')",
  },
  {
    text: "Centralized Housemanship Placement to 43 Training Institutions under Federal Government",
    image:
      " linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/registrar01.png')",
  },
];

let img = 0;
let txt = 0;

function slideImages() {
  // backgroundImages[img].image.style.objectFit = "contain";
  if (img < backgroundImages.length) {
    const backgroundPhoto = document.getElementById("slider-img");
    const backgroundText = document.getElementById("slider-text");
    backgroundPhoto.style.backgroundImage = backgroundImages[img].image;
    backgroundPhoto.style.boxShadow = "4px 2px 4px 4px rgba(0, 0, 0, 0.4)";
    backgroundText.innerHTML = backgroundImages[img].text;
    backgroundText.style.animation = "ease-in";
    img++;
    if (img === backgroundImages.length) {
      img = 0;
      return;
    }
  }
}
setInterval(slideImages, 5000);

function animateText() {}

/*
//testing active class
const show = document.getElementById("menu").textContent;
console.log(show);

const edu = document.getElementById("edu");
function active() {
  edu.style.display.backgroundColor = green;
}

*/

const active = document.getElementsByClassName("active").classList.add("now");

console.log(active);

//active.classList.add(now);

/*
======================================== 
Read more style
========================================
*/
function readMoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
