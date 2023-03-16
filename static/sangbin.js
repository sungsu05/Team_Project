const vibration = (target) => {
  target.classList.add("vibration");

  setTimeout(function () {
    target.classList.remove("vibration");
  }, 600);
};

let mainImg = document.querySelector("#vinyl_profile");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (value >= 2455) {
    mainImg.style.animation = "img_disappear 1.3s ease-out forwards";
  } else if (value <= 1200) {
    mainImg.style.animation = "img_disappear 1.3s ease-out forwards";
  } else {
    mainImg.style.animation = "img_appear 1.3s ease-out";
  }
});

let mainText = document.querySelector(".maintext");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (value >= 2455) {
    mainText.style.animation = "vin_disappear 1.3s ease-out forwards";
  } else if (value <= 1200) {
    mainText.style.animation = "vin_disappear 1.3s ease-out forwards";
  } else {
    mainText.style.animation = "vin_appear 1.3s ease-out";
  }
});
