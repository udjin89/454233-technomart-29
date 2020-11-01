
console.log("script on")
// Кнопка с отправкой формы "Напишите нам" ----------------------
const writeUs = document.querySelector(".button-write-us");
const modalWriteUs = document.querySelector(".modal-write-us");
if(modalWriteUs){
  const closeButton = modalWriteUs.querySelector(".button-close");
  const name = modalWriteUs.querySelector(".field-name");

  window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
      if(!modalWriteUs.classList.contains("hidden")){
        evt.preventDefault();
        modalWriteUs.classList.add("hidden");
      }
    }
  });

  writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click button");
    modalWriteUs.classList.remove("hidden");
    name.focus();
    console.log("Delete class hidden and focus name");
  });

  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click closeButton");
    modalWriteUs.classList.add("hidden");
    console.log("Add class hidden");
  });
}
// Кнопка открытия карты ----------------------
const map = document.querySelector(".map");
const modalMap = document.querySelector(".modal-map");
if(modalMap){
  const closeButtonMap = modalMap.querySelector(".button-close");

  window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
      if(!modalMap.classList.contains("hidden")){
        evt.preventDefault();
        modalMap.classList.add("hidden");
      }
    }
  });

  map.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click map");
    modalMap.classList.remove("hidden");
    console.log("Delete class hidden and show map");
  });

  closeButtonMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click closeButtonMap");
    modalMap.classList.add("hidden");
    console.log("Add class hidden");
  });
}
// Кнопка "купить", добавление в корзину ----------------------

const buttonBuy = document.querySelectorAll(".button-buy");
const modalCart = document.querySelector(".modal-add-cart");
const closeButtonCart = modalCart.querySelector(".button-close");

for (var i = 0; i < buttonBuy.length; i++) {
    buttonBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click Buy");
    modalCart.classList.remove("hidden");
    console.log("Show message!");
    });
}

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    if(!modalCart.classList.contains("hidden")){
      evt.preventDefault();
      modalCart.classList.add("hidden");
    }
  }
});

closeButtonCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Click closeButtonCart");
  modalCart.classList.add("hidden");
  console.log("Add class hidden");
});

// +++++++++++++++++Slider+++++++++++++++++

let slideIndex = 0;
const galleryContent = document.querySelector(".gallery-content");
if(galleryContent){
  const listSliderItem = galleryContent.querySelectorAll(".slider-item");
  const buttonBack = galleryContent.querySelector(".slider-control--left");
  const buttonNext = galleryContent.querySelector(".slider-control--right");

  console.log(listSliderItem);

  buttonNext.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click buttonNext");
    slideIndex += 1;
    showSlides(slideIndex, listSliderItem);

  });
  buttonBack.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click buttonBack");
    slideIndex -= 1;
    showSlides(slideIndex, listSliderItem);

  });
}
/* Функция перелистывания: */
function showSlides(n, slides) {
  console.log("Slides count =" + slides.length);
  console.log("next slide =" + n);

  /* Проверяем количество слайдов: */
  if (n == slides.length) {
    slides[n-1].classList.remove("slider-current");
    slideIndex = 0;
    slides[0].classList.add("slider-current");
    console.log("jump to fist slide");
  }
  else  if (n < 1) {
      slides[n+1].classList.remove("slider-current");
      slideIndex = slides.length - 1;
      console.log("jump to last slide");
      slides[slideIndex].classList.add("slider-current");
  }
    else
    {
      /* Делаем элемент блочным: */
      slides[n-1].classList.remove("slider-current");
      slides[n].classList.add("slider-current");
    }
    console.log("index =" + slideIndex);
}
