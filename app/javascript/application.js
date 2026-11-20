// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

//新規登録　ユーザー画像切り替え
document.addEventListener("change", (event) => {
  if(event.target.id !== "profile-image-input") return;

  const file = event.target.files[0];
  if (!file) return;
  
  document.getElementById("profile-image-preview").src =
  URL.createObjectURL(file);
});

//画像投稿　表示方法
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

    urls.forEach((url) => URL.revokeObjectURL(url));

    photos = Array.from(event.target.files).filter((file) => file.type.startsWith("image/"));
    urls = photos.map((file) => URL.createObjectURL(file));

    if(photos.length === 0) {
      get("post-photo-current").hidden = true;
      get("post-photo-previous").hidden = true;
      get("post-photo-next").hidden = true;
      get("post-photo-counter").textContent = "";
      return;
    }

    showPhoto(0);
  });

  //ボタンで画像切り替え
  document.addEventListener("click",(event) => {
    if (event.target.closest("#post-photo-previous") && index > 0) {
      showPhoto(index - 1);
    }

    if(event.target.closest("#post-photo-next") && index < photos.length - 1){showPhoto(index + 1); }
  });  
})();
