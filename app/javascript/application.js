// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "raty"

/*新規登録　ユーザー画像切り替え*/
document.addEventListener("change", (event) => {
  if(event.target.id !== "profile-image-input") return;

  const file = event.target.files[0];
  if (!file) return;
  
  document.getElementById("profile-image-preview").src =
  URL.createObjectURL(file);
});


/*画像投稿　表示方法*/
(() => {
  let photos = [];
  let urls = [];
  let index = 0;

  const get = (id) => document.getElementById(id);

  //指定写真と枚数を表示
  const showPhoto = (number) => {
    if (photos.length === 0) return;

    index = number;
    const image = get("post-photo-current");

    image.src = urls[index];
    image.alt = photos[index].name;
    image.hidden = false;
    get("post-photo-counter").textContent = `${index + 1} / ${photos.length}` ;

    get("post-photo-previous").hidden = index === 0;
    get("post-photo-next").hidden = index === photos.length -1;
  };

  //写真変更あったらプレビューの更新
  document.addEventListener("change", (event) => {
    if(event.target.id !== "post-image-input") return;

    const selectedPhotos = Array.from(event.target.files).filter((file) => file.type.startsWith("image/"));
    selectedPhotos.forEach((file) => {
       photos.push(file);
       urls.push(URL.createObjectURL(file));
    });

    if(photos.length === 0) {
      get("post-photo-current").hidden = true;
      get("post-photo-previous").hidden = true;
      get("post-photo-next").hidden = true;
      get("post-photo-counter").textContent = "";
      return;
    }

    showPhoto(photos.length - 1);
  });

  //ボタンで画像切り替え
  document.addEventListener("click",(event) => {
    if (event.target.closest("#post-photo-previous") && index > 0) {
      showPhoto(index - 1);
    }

    if(event.target.closest("#post-photo-next") && index < photos.length - 1){showPhoto(index + 1); }
  });  
})();


/*投稿詳細　画像表示*/
document.addEventListener("turbo:load", () => {
  //写真取得後、配列にする
  const photos = Array.from( document.querySelectorAll(".post-show-photo"));

  if (photos.length === 0) return;

  //枚数表示
  const previousButton = document.getElementById("post-show-photo-previous");
  const nextButton = document.getElementById("post-show-photo-next");
  const counter = document.getElementById("post-show-photo-counter");

  let currentIndex = 0;

  //写真表示（ボタン・枚数表示の更新）
  const showPhoto = (index) => {
    photos.forEach((photo, photoIndex) => {
      photo.hidden = photoIndex !== index;
    });

    currentIndex = index;
    previousButton.hidden = index === 0;
    nextButton.hidden = index === photos.length - 1;
    counter.textContent = `${index + 1} / ${photos.length}`;
  };

  showPhoto(0);

  //ボタン切り替え
  previousButton.addEventListener("click",() => {
    if (currentIndex > 0) {
      showPhoto(currentIndex - 1);
    }
  });  

  nextButton.addEventListener("click",() => {
    if (currentIndex < photos.length - 1) {
      showPhoto(currentIndex + 1);
    }
  });  

});


/*タグ　追加*/
document.addEventListener("click", (event) => {
  if (event.target.id !== "button-tag") return;

  const tagName = document.getElementById("new-tag-name").value.trim();

  if(tagName.length === 0) return;

  const alreadyAdded = Array.from(document.querySelectorAll("#hidden-tag input")).some((field) => field.value === tagName);

  if (alreadyAdded){
    document.getElementById("new-tag-name").value = "";
    return;
  }

  const chip = document.createElement("span");
  chip.classList.add("post-tag");
  chip.textContent = tagName;
  document.getElementById("add-tag").append(chip);

  //Railsに送る隠し入力欄
  const hiddenField = document.createElement("input");
  hiddenField.type = "hidden";
  hiddenField.name = "post[tag_names][]";
  hiddenField.value = tagName;
  document.getElementById("hidden-tag").append(hiddenField);

  document.getElementById("new-tag-name").value = "";

});