import Raty from "raty-js";

//味　星レビュー
document.addEventListener("turbo:load", () => {
  const elem = document.querySelector("#taste_rating");
  if (!elem) return;

  elem.innerHTML = "";

  new Raty(elem, {
    starOn: elem.dataset.starOn,
    starOff: elem.dataset.starOff,
    scoreName: "post[taste_rating]",
    number: 5
  }).init();
});

//価格　星レビュー
document.addEventListener("turbo:load", () => {
  const elem = document.querySelector("#price_rating");
  if (!elem) return;

  elem.innerHTML = "";

  new Raty(elem, {
    starOn: elem.dataset.starOn,
    starOff: elem.dataset.starOff,
    scoreName: "post[price_rating]",
    number: 5
  }).init();
});

//リピート　星評価
document.addEventListener("turbo:load", () => {
  const elem = document.querySelector("#repeat_rating");
  if (!elem) return;

  elem.innerHTML = "";

  new Raty(elem, {
    starOn: elem.dataset.starOn,
    starOff: elem.dataset.starOff,
    scoreName: "post[repeat_rating]",
    number: 5
  }).init();
});

//総合　星評価
document.addEventListener("turbo:load", () => {
  const elem = document.querySelector("#overall_rating");
  if (!elem) return;

  elem.innerHTML = "";

  new Raty(elem, {
    starOn: elem.dataset.starOn,
    starOff: elem.dataset.starOff,
    scoreName: "post[overall_rating]",
    number: 5
  }).init();
});
