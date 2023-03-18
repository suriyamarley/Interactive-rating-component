//elements

const inputBtnEl = document.querySelectorAll(".rating-input");
const btnSubmit = document.getElementById("btn-submit");
const hiddenEl = document.getElementById("hidden-card");
const cardEl = document.getElementById("show");
const outputEl = document.getElementById("output");
const btnOk = document.getElementById("btnok");

//global variable
let rating;

//functions
function init() {
  rating = 0;
  outputEl.innerText = 0;
}

const displayUI = function (index) {
  for (let i = 0; i < inputBtnEl.length; i++) {
    if (i === index) {
      inputBtnEl[i].classList.add("selected");
    } else {
      inputBtnEl[i].classList.remove("selected");
    }
  }
};

//event listners

for (let i = 0; i < inputBtnEl.length; i++) {
  inputBtnEl[i].addEventListener("click", function () {
    rating = Number(this.value);
    displayUI(rating - 1);
  });
}

//when we click submit hidden card will open

btnSubmit.addEventListener("click", function () {
  if (rating === 0) {
    alert("Select a valid rating");
  } else {
    hiddenEl.classList.remove("hidden");
    cardEl.classList.add("hidden");

    outputEl.innerText = `You Selected ${rating} out of 5`;
  }
});

//when we click ok rating card will open

btnOk.addEventListener("click", function () {
  hiddenEl.classList.add("hidden");
  cardEl.classList.remove("hidden");
  init();
  // inputBtnEl.value = null;
  for (let i = 0; i < inputBtnEl.length; i++) {
    inputBtnEl[i].classList.remove("selected");
  }
});