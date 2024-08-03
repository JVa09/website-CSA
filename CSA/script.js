

function updateTime() {
    const options = { timeZone: 'Asia/Manila', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const date = new Date().toLocaleDateString('en-US', options);
    document.getElementById('date-time').innerHTML = date;
}


setInterval(updateTime, 1000);


updateTime();

let slideIndex1 = 1;
let slideIndex2 = 1;

showSlides1(slideIndex1);
showSlides2(slideIndex2);

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    let i;
    let slides1 = document.getElementsByClassName("mySlides1");
    let dots1 = document.getElementsByClassName("dot1");
    if (n > slides1.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides1.length}
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";  
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideIndex1-1].style.display = "block";  
    slides1[slideIndex1-1].classList.add("fade");  
    dots1[slideIndex1-1].className += " active";
}

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";  
    slides2[slideIndex2-1].classList.add("fade");  
    dots2[slideIndex2-1].className += " active";
}

setInterval(() => {
  let currentSlide1 = slideIndex1;
  plusSlides1(1);
  if (currentSlide1 === slideIndex1) {
    slideIndex1 = 1;
    showSlides1(slideIndex1);
  }
}, 5000); 


setInterval(() => {
  let currentSlide2 = slideIndex2;
  plusSlides2(1);
  if (currentSlide2 === slideIndex2) {
    
    slideIndex2 = 1;
    showSlides2(slideIndex2);
  }
}, 5000); 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
      var menu = document.querySelector('.navbar ul');
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  });
