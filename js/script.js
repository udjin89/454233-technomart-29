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
        modalWriteUs.classList.remove("modal-showX");
        modalWriteUs.classList.remove("modal-error");
      }
    }
  });

  writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click button");
    modalWriteUs.classList.remove("hidden");
    modalWriteUs.classList.add("modal-showX");
    name.focus();
    console.log("Delete class hidden and focus name");
  });

  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click closeButton");
    modalWriteUs.classList.add("hidden");
    modalWriteUs.classList.remove("modal-showX");
    modalWriteUs.classList.remove("modal-error");
    console.log("Add class hidden");
  });

  const formWrite = modalWriteUs.querySelector("form");
  const userName = formWrite.querySelector("[name=userName]");
  const userEmail = formWrite.querySelector("[name=userEmail]");
  const userComment = formWrite.querySelector("[name=userComment]");

  formWrite.addEventListener("submit", function(evt){
    if(!userName.value || !userEmail.value || !userComment.value){
      evt.preventDefault();
      console.log("Error");
      modalWriteUs.classList.remove("modal-error");
      setTimeout(function(){
        modalWriteUs.classList.add("modal-error");
      }, 0);
    }
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
        modalMap.classList.remove("modal-show");
      }
    }
  });

  map.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click map");
    modalMap.classList.remove("hidden");
    modalMap.classList.add("modal-show");
    console.log("Delete class hidden and show map");
  });

  closeButtonMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click closeButtonMap");
    modalMap.classList.add("hidden");
    modalMap.classList.remove("modal-show");
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
    modalCart.classList.add("modal-showY");
    console.log("Show message!");
    });
}

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    if(!modalCart.classList.contains("hidden")){
      evt.preventDefault();
      modalCart.classList.add("hidden");
      modalCart.classList.remove("modal-showY");
    }
  }
});

closeButtonCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Click closeButtonCart");
  modalCart.classList.add("hidden");
  modalCart.classList.remove("modal-showY");
  console.log("Add class hidden");
});
// Slider
let slideIndex = 1; // текущий слайд
const galleryContent = document.querySelector(".gallery-content");
if(galleryContent){
  const listSliderItem = galleryContent.querySelectorAll(".slider-item");
  const buttonBack = galleryContent.querySelector(".slider-control--left");
  const buttonNext = galleryContent.querySelector(".slider-control--right");
  const sliderTabs = galleryContent.querySelector(".slider-tabs");

  const listTabs = sliderTabs.getElementsByTagName("button");

  for(let i = 0; i < listTabs.length; i++){

    listTabs[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      console.log("Click Tab Slide");

      for(let j = 0; j < listTabs.length; j++)
      {
        listTabs[j].classList.remove("active-tab");
        listSliderItem[j].classList.remove("slider-current");
      }

      listTabs[i].classList.add("active-tab");
      listSliderItem[i].classList.add("slider-current");

    });
  }

  console.log(listTabs);

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
function showSlides(index, listSlides)
  {
    console.log("Function receive: index = " + index + "  listSlides = " + listSlides);

    if(index < 1){
      slideIndex = listSlides.length;
      console.log("index < 1, now index = " + listSlides.length);
    }
    if(index > listSlides.length){
      slideIndex = 1;
      console.log("index > " + listSlides.length +", now index = 1");
    }

    for( let i=0; i < listSlides.length; i++){
      listSlides[i].classList.remove("slider-current");
    }
    listSlides[slideIndex -1].classList.add("slider-current");
  }


  /* Сервисы */
  const services = document.querySelector(".slider-services");
  if(services){
    const listServicesItem = services.querySelectorAll(".list-services-item");
    const listServicesDescription = services.querySelectorAll(".description-services-item");

    for(let i = 0; i < listServicesItem.length; i++){
      let tab = listServicesItem[i];

      tab.addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log("Click Tab = " + i);
        activateSlide(i, listServicesItem, listServicesDescription);

      });
    }
  }
  function activateSlide(index, listServicesItem, listServicesDescription){

    for( let i=0; i < listServicesItem.length; i++){
      listServicesItem[i].classList.remove("activate");
      listServicesDescription[i].classList.remove("description-services-item--activate");
    }
    listServicesItem[index].classList.add("activate");
    listServicesDescription[index].classList.add("description-services-item--activate");
  }

