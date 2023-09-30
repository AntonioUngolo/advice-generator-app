"use strict";

const adviceCard = document.querySelector("#advice_card");
const diceButton = document.querySelector("#advice_dice");
const adviceNumber = document.querySelector("#advice_number span");
const advice = document.querySelector("#advice");
const attribution = document.querySelector(".attribution");

setTimeout(() => {
  adviceCard.classList.remove("hidden");
  attribution.classList.remove("hidden");
}, 2000);

const randomNumber = function () {
  return parseInt(Math.random() * 250);
};

const transitionAdvice = function (data) {
  setTimeout(() => {
    advice.classList.add("old");
    advice.classList.remove("new");
  }, 1000);

  setTimeout(() => {
    const { slip } = data;
    adviceNumber.textContent = slip.id;
    advice.textContent = slip.advice;
    advice.classList.remove("old");
    advice.classList.add("new");
  }, 1500);
};

const adviceAPI = function () {
  fetch(`https://api.adviceslip.com/advice/${randomNumber()}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // const { slip } = data;
      // adviceNumber.textContent = slip.id;
      // advice.textContent = slip.advice;
      transitionAdvice(data);
    });
};

adviceAPI();

diceButton.addEventListener("click", function () {
  adviceAPI();
});
