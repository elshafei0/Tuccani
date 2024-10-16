//nav
const resp = document.querySelector(".icon");
const nav = document.getElementById("nav");
let currentIndex = 0;
resp.addEventListener("click", function () {
  currentIndex = 1 - currentIndex;
  switch (currentIndex) {
    case 1:
      {
        resp.style.transform = "rotate(90deg)";
        nav.style.right = "0";
      }
      break;

    case 0:
      {
        resp.style.transform = "rotate(0deg)";
        nav.style.right = "-200px";
      }
      break;}
});
//nav


// slider
var slideIndex = [0, 0, 0, 0];  // إضافة عنصر جديد للمؤشر الخاص بالشرائح
var slideId = ["slider1", "slider2", "slider3", "slider4"]; // إضافة معرف slider الرابع

function showSlides(no) {
    var slides = document.querySelectorAll("#" + slideId[no] + " .slides .img, #" + slideId[no] + " .slides video"); // إضافة الفيديو إلى المحدد

    // إيقاف تشغيل جميع مقاطع الفيديو
    var videos = document.querySelectorAll("#" + slideId[no] + " .slides video");
    videos.forEach(video => {
        video.pause(); // إيقاف تشغيل الفيديو
        video.currentTime = 0; // إعادة الفيديو إلى البداية
    });

    if (slideIndex[no] >= slides.length) {
        slideIndex[no] = 0;
    }
    if (slideIndex[no] < 0) {
        slideIndex[no] = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex[no]].style.display = "block";
}

function nextSlide(no) {
    slideIndex[no - 1]++;
    showSlides(no - 1);
}

function prevSlide(no) {
    slideIndex[no - 1]--;
    showSlides(no - 1);
}
//slider