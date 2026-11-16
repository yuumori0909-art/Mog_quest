// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("change", (event) => {
  if(event.target.id !== "profile-image-input") return;

  const file = event.target.files[0];
  if (!file) return;
  
  document.getElementById("profile-image-preview").src =
  URL.createObjectURL(file);
});