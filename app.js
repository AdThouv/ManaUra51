var w = window.innerWidth;

var header = document.querySelector("#header");
var logo = document.querySelector("#header .logo img");
var nav = document.querySelector("#header .nav");
var link = document.querySelectorAll("#header .nav li");

if (w >= 1280) {
  window.addEventListener("scroll", function (e) {
    let sy = window.scrollY;
    if (sy < 99) {
      logo.style.width = "200px";
      logo.src = "image/received_2647967545502699-svg.svg";
      nav.style.padding = "60px";
      header.style.backgroundColor = "transparent";
      link.forEach((element) => {
        element.style.color = "white";
        element.addEventListener("mouseover", function (e) {
          e.preventDefault();
          element.style.color = "black";
        });
        element.addEventListener("mouseleave", function (e) {
          e.preventDefault();
          element.style.color = "white";
        });
      });
    }
    if (sy >= 100) {
      logo.style.width = "50px";
      logo.src = "image/logoWhite2.svg";
      nav.style.padding = "0px";
      header.style.backgroundColor = "rgba(0,0,0,0.9)";
      link.forEach((element) => {
        element.style.color = "white";
      });
    }
  });
}

// AUTOPLAY Slideshow TEXT FORMATION //

var indexValue = 0;

/// Premier SlideShow   ///

function slideShow() {
  setTimeout(slideShow, 8000);
  var x;
  const img = document.querySelectorAll("#galerie .column .equipe");
  if (img[0]) {
    var dots = document.getElementsByClassName("dot");
    for (x = 0; x < img.length; x++) {
      img[x].style.opacity = "0";
    }
    indexValue++;
    if (indexValue > img.length) {
      indexValue = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (indexValue > img.length) {
      indexValue = 1;
    }
    img[indexValue - 1].style.opacity = "1";
    dots[indexValue - 1].className += " active";
  }
}
const img = document.querySelectorAll("#galerie .column .equipe");
var dots = document.getElementsByClassName("dot");

function currentSlide(index) {
  if (index > img.length) {
    index = 1;
  } else if (index < 1) {
    index = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.opacity = "0";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  img[index - 1].style.opacity = "1";
  dots[index - 1].className += " active";
}
slideShow();

///    Deuxieme Slide Show    ///

var indexValue2 = 0;

function slideShow2() {
  setTimeout(slideShow2, 8000);
  var x;
  const img2 = document.querySelectorAll("#galerie .columnReverse img");
  if (img2[0]) {
    var dots2 = document.getElementsByClassName("dot2");
    for (x = 0; x < img2.length; x++) {
      img2[x].style.opacity = "0";
    }
    indexValue2++;
    if (indexValue2 > img2.length) {
      indexValue2 = 1;
    }
    for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
    }

    if (indexValue2 > img2.length) {
      indexValue2 = 1;
    }
    img2[indexValue2 - 1].style.opacity = "1";
    dots2[indexValue2 - 1].className += " active";
  }
}
const img2 = document.querySelectorAll("#galerie .columnReverse img");
var dots2 = document.getElementsByClassName("dot2");

function currentSlide2(index) {
  if (index > img2.length) {
    index = 1;
  } else if (index < 1) {
    index = img2.length;
  }
  for (i = 0; i < img2.length; i++) {
    img2[i].style.opacity = "0";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  img2[index - 1].style.opacity = "1";
  dots2[index - 1].className += " active";
}
slideShow2();

//  END Autoplay

//// OPEN MENU MOBILE /////
var marque = document.querySelector(".marque")
var logo = document.querySelector(".logo");
var logoImg = document.querySelector(".logo img")
var nav = document.querySelector(".nav");
var logoMenu = document.querySelector(".nav img")

window.addEventListener("scroll", function() {
  var sy = window.pageYOffset;
  if(sy < 49){
      logoImg.src = "image/received_2647967545502699-svg.svg";
      logoImg.style.width= "200px" ;
      logo.style.justifyContent = "center";
      logoImg.style.padding= "20px";
      logoImg.style.marginTop= "0px";
      
  }
  if(sy >= 50){
    logoImg.src = "image/logoWhite2.svg"
    logoImg.style.width= "40px";
    logoImg.style.padding= "0px";
    logoImg.style.marginTop= "20px";
    logo.style.justifyContent = "start";

  }

})



logo.addEventListener("click", function (e) {
  e.preventDefault();
  nav.style.opacity = 1;
  nav.style.left = 0;
  logo.style.opacity = 0; 
 setTimeout(() => {
   marque.style.display = "none";
 }, 200);
 
 
});

logoMenu.addEventListener("click", function(e){
  e.preventDefault();
  nav.style.left = "-320px";
  nav.style.opacity = 0 ;
  logo.style.opacity = 1;
  marque.style.display = "block";

})