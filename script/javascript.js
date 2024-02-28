// Js Scroling & Responsive button

let navigationResponsiveButton = document.querySelector(".res-nav");
let navItem = document.querySelectorAll(".nav-item");

const showNavigation = (e) => {
  e.preventDefault();
  let navigationHeader = document.querySelector(".navigasi-heading");
  navigationHeader.classList.toggle("slide-down");
};

const smoothNavigation = function (e) {
  let linkNav = this.children;
  let linkNavHref = linkNav[0].getAttribute("href");
  let destinationScroll = document.querySelector(linkNavHref);
  let destinationOffset = destinationScroll.offsetTop;

  if (this.parentElement.classList.contains("navigasi-heading")) {
    navItem.forEach((n) => {
      n.classList.remove("on");
    });
    this.classList.add("on");
  }

  let offsetMinus = 60;

  switch (linkNavHref) {
    case "#kontak":
      offsetMinus = 90;
      break;
  }

  window.scrollTo({
    top: destinationOffset - offsetMinus,
    behavior: "smooth",
  });

  e.preventDefault();
};

navigationResponsiveButton.addEventListener("click", showNavigation);
navItem.forEach((nav) => {
  nav.addEventListener("click", smoothNavigation);
});
// Javascript Kalkulator

function calculateBMI() {
  // Mendapatkan nilai tinggi badan dari input
  let height = parseFloat(document.getElementById("height").value);
  // Mendapatkan nilai berat badan dari input
  let weight = parseFloat(document.getElementById("weight").value);
  // Mendapatkan nilai gender dari input
  let gender = document.getElementById("gender").value;

  // Menghitung BMI
  let bmi = weight / ((height / 100) * (height / 100));

  // Menampilkan hasil BMI
  document.getElementById("result").innerHTML = "BMI Anda: " + bmi.toFixed(2);

  // Menampilkan kategori BMI
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 24.9 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  // Animasi text
  document.getElementById("result").innerHTML += "<br>Kategori: " + category;
}

const text = document.querySelector("#jb-text h1 span");
let textIndex = 0;
let interval;

function animateText() {
  text.style.opacity = "1";
  text.innerText += textIndex % 2 === 0 ? " " : "|";
  textIndex++;
  if (textIndex > 10) {
    clearInterval(interval);
    text.innerText = "Temukan Keseimbangan Tubuh anda";
  }
}

interval = setInterval(animateText, 300);

const imgDok = document.getElementById("imgdok");

imgDok.addEventListener("mouseenter", function () {
  imgDok.style.transform = "scale(1.1)";
});

imgDok.addEventListener("mouseleave", function () {
  imgDok.style.transform = "scale(1)";
});
