var link=document.querySelector(".location-info-button"),popup=document.querySelector(".write-us-form"),close=popup.querySelector(".form-button-close"),login=popup.querySelector("[name=login]"),mail=popup.querySelector("[name=email]"),message=popup.querySelector(".write-us-text"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),login.focus(),storage?(login.value=storage,mail.focus()):login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),popup.addEventListener("submit",function(e){login.value&&mail.value&&message.value?isStorageSupport&&localStorage.setItem("mail",mail.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27==e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});