//for image slider
let currentIndex = 0;

function moveSlides(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slides img").length;
  currentIndex += index;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
  moveSlides(1);
}, 3000);

// For search button

function googlesearch() {
  const query = document.getElementById("searchinput").value;
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    query
  )}`;
  window.location.href = googleSearchUrl;
}

document.getElementById("searchbtn").addEventListener("click", function () {
  googlesearch();
});
document
  .getElementById("searchinput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      googlesearch();
    }
  });
