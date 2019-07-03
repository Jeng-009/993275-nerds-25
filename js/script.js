

var link = document.querySelector(".location-info-button");
var popup = document.querySelector(".write-us-form");
var close = popup.querySelector(".form-button-close");

var login = popup.querySelector("[name=login]");
var mail = popup.querySelector("[name=email]");
var message = popup.querySelector(".write-us-text");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
}
catch (err) {
  isStorageSupport = false;
}

link.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();

   if (storage) {
      login.value = storage;
      mail.focus();
    } else {
      login.focus();
    }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function (evt) {
  if (!login.value || !mail.value || !message.value) {
      evt.preventDefault();
      popup.classList.remove ("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
  } 
  else {
    if (isStorageSupport) {
    localStorage.setItem("mail", mail.value);
  }
}
});

window.addEventListener ("keydown", function (evt) {
  if (evt.keyCode == 27) {
    evt.preventDefault ();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});