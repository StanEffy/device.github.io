      
    var catalog = document.querySelector(".nav__catalog");
var menu = document.querySelector(".header__menu");
var catalogActive = document.querySelector(".header__menu-visible");

const toggleMenu = () => {
  menu.classList.toggle('header__menu-visible');
}

catalog.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = menu.classList.contains('header__menu-visible');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
})




      var button = document.querySelector(".slider__button");
      var buttonMaterial = document.querySelector(".slider-right__element");

      var warranty = document.querySelector(".slider__button-warranty"); 
      var warrantyMat = document.querySelector(".slider-right__element-warranty");
      
      var delivery = document.querySelector(".slider__button-delivery"); 
      var deliveryMat = document.querySelector(".slider-right__element-delivery");

      var credit = document.querySelector(".slider__button-credit"); 
      var creditMat = document.querySelector(".slider-right__element-credit");
      
      var buttonCover = document.querySelector('.main-slider-button__cover');

      /*var sliderButton1 = buttonCover.querySelector(".main-slider-button-1");
      var sliderButton2 = buttonCover.querySelector(".main-slider-button-2");
      var sliderButton3 = buttonCover.querySelector(".main-slider-button-3");
      var sliderElement1 = document.querySelector(".main-slider__element-1");
      var sliderElement2 = document.querySelector(".main-slider__element-2");
      var sliderElement3 = document.querySelector(".main-slider__element-3");





      
      sliderButton1.addEventListener("click", function (evt) {
            evt.preventDefault();

            sliderElement1.classList.add("main-slider__element-active");
            sliderElement2.classList.remove("main-slider__element-active");
            sliderElement3.classList.remove("main-slider__element-active");

            
        });

      sliderButton2.addEventListener("click", function (evt) {
            evt.preventDefault();

            sliderElement2.classList.add("main-slider__element-active");
            sliderElement1.classList.remove("main-slider__element-active");
            sliderElement3.classList.remove("main-slider__element-active");

            
        });

      sliderButton3.addEventListener("click", function (evt) {
            evt.preventDefault();

            sliderElement3.classList.add("main-slider__element-active");
            sliderElement1.classList.remove("main-slider__element-active");
            sliderElement2.classList.remove("main-slider__element-active");

            
        });*/


      warranty.addEventListener("click", function (evt) {
            evt.preventDefault();
            delivery.classList.remove("slider__button-active");
            credit.classList.remove("slider__button-active");

            warranty.classList.add("slider__button-active");
            deliveryMat.classList.remove("active");
            creditMat.classList.remove("active");

            warrantyMat.classList.add("active");

        });

      delivery.addEventListener("click", function (evt) {

        evt.preventDefault();
            warranty.classList.remove("slider__button-active");
            credit.classList.remove("slider__button-active");

            delivery.classList.add("slider__button-active");
            warrantyMat.classList.remove("active");
            creditMat.classList.remove("active");

            deliveryMat.classList.add("active");

         
        });

      credit.addEventListener("click", function (evt) {
        evt.preventDefault();
            delivery.classList.remove("slider__button-active");
            warranty.classList.remove("slider__button-active");

            credit.classList.add("slider__button-active");
            deliveryMat.classList.remove("active");
            warrantyMat.classList.remove("active");

            creditMat.classList.add("active");


        });
            

var modalShow = document.querySelector(".write-to-us__button");
var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".modal-close");

modalShow.addEventListener("click", function (evt) {
        evt.preventDefault();
            modal.classList.add("modal-show")

        });
modalClose.addEventListener("click", function (evt) {
        evt.preventDefault();
            modal.classList.remove("modal-show");
            mapModal.classList.remove("modal-show");
        });


var smallMap = document.querySelector(".small-map");
var mapModal = document.querySelector(".map-modal");
var mapClose = document.querySelector(".map__modal-close");
smallMap.addEventListener("click", function (evt) {
        evt.preventDefault();
            mapModal.classList.add("modal-show");

        });
mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
            mapModal.classList.remove("modal-show");
        });


/*var mainSliderButton = document.querySelector("main-slider-button")

mainSliderButton.addEventListener("click", function (evt) ) {
  evt.preventDefault();
  mainsliderButton.classList.add("active");
}

      /*


        });
      /* это конец моего скрипта */
        var link = document.querySelector(".login-link");

        var popup = document.querySelector(".modal-login");
        var close = popup.querySelector(".modal-close");

        var form = popup.querySelector("form");
        var login = popup.querySelector("[name=login]");
        var password = popup.querySelector("[name=password]");

        var isStorageSupport = true;
        var storage = "";

        try {
            storage = localStorage.getItem("login");
        } catch (err) {
            isStorageSupport = false;
        }

        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");

            if (storage) {
                login.value = storage;
                password.focus();
            } else {
                login.focus();
            }
        });

        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        });

        form.addEventListener("submit", function (evt) {
            if (!login.value || !password.value) {
                evt.preventDefault();
                popup.classList.remove("modal-error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("modal-error");
            } else {
                if (isStorageSupport) {
                    localStorage.setItem("login", login.value);
                }
            }
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                    popup.classList.remove("modal-error");
                }
            }
        });