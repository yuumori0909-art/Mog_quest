import Raty from "raty-js";

/*投稿フォーム　星評価*/
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


/*投稿詳細画面　星評価（編集不可）*/
document.addEventListener("turbo:load", () => {
  const ratings = document.querySelectorAll(".post-show-rating");

  ratings.forEach((elem) => {
    elem.innerHTML = "";

    new Raty(elem, {
      readOnly: true,
      score: Number(elem.dataset.score),
      starOn: elem.dataset.starOn,
      starOff: elem.dataset.starOff,
      number: 5
    }).init();
  });
});

