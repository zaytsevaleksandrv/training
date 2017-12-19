var getLogin = document.querySelector('#login');
var getReg = document.querySelector('#registration');

var popupWindowAuth = document.querySelector('.popup-auth');
var popupWindowReg = document.querySelector('.popup-reg');

var closeAuthBtn = document.querySelectorAll('.form-auth__close')[0];
var closeRegBtn = document.querySelectorAll('.form-auth__close')[1];
var regBtn = document.querySelector('.form-auth__link-open-reg-popup');
var authBtn = document.querySelector('.form-auth__link-open-auth-popup');
var switchBtn = document.querySelector('.switch');
var addBtn = document.querySelectorAll('.b-product .btn-enter');

var wrapper = document.querySelector('.wrapper__post');
var imgProduct = document.querySelectorAll('.b-product__screen-saver');
var product = document.querySelectorAll('.b-product');
var price = document.querySelectorAll('.b-product__price');
var description = document.querySelectorAll('.b-product__description-list');

// открыть окно авторизации
getLogin.onclick = function(e) {
    e.preventDefault();
    popupWindowAuth.classList.add("popup--open");
}
// открыть окно регистрации
getReg.onclick = function(e) {
    e.preventDefault();
    popupWindowReg.classList.add("popup--open");
}

// закрыть окно авторизации
closeAuthBtn.onclick = function(e) {
    e.preventDefault();
    popupWindowAuth.classList.remove("popup--open")
}
// закрыть окно регистрации
closeRegBtn.onclick = function(e) {
    e.preventDefault();
    popupWindowReg.classList.remove("popup--open")
}

// перейти из окна авторизации в окно регистрации
regBtn.onclick = function(e){
  e.preventDefault();
  popupWindowAuth.classList.remove("popup--open");
  popupWindowReg.classList.add("popup--open");
}
// перейти из окна регистрации в окно авторизации
authBtn.onclick = function(e){
  e.preventDefault();
  popupWindowReg.classList.remove("popup--open");
  popupWindowAuth.classList.add("popup--open");
}

//меняем на список, сетку
switchBtn.onclick = function(e) {
  e.preventDefault();
  if (switchBtn.textContent == "Сеткой") {
    switchBtn.textContent = "Списком";
    wrapper.classList.add("wrapper__post_column");
    for (var i = 0; i < product.length; i++ ) {
      product[i].style.width = "auto";
      product[i].style.display = "flex";
    }
    for (var i = 0; i < imgProduct.length; i++ ) {
      imgProduct[i].classList.add("b-product__screen-saver-list");
    }
    for (var i = 0; i < price.length; i++ ) {
      price[i].classList.add("b-product__price-list");
    }
    for (var i = 0; i < description.length; i++ ) {
      description[i].style.display = "block";
    }
    for (var i = 0; i < addBtn.length; i++ ) {
      addBtn[i].style.display = "block";
    }
  } else {
    switchBtn.textContent = "Сеткой";
    wrapper.classList.remove("wrapper__post_column");
    for (var i = 0; i < product.length; i++ ) {
      product[i].removeAttribute("style");
    }
    for (var i = 0; i < imgProduct.length; i++ ) {
      imgProduct[i].classList.remove("b-product__screen-saver-list");
    }
    for (var i = 0; i < price.length; i++ ) {
      price[i].classList.remove("b-product__price-list");
    }
    for (var i = 0; i < description.length; i++ ) {
      description[i].removeAttribute("style");
    }
    for (var i = 0; i < addBtn.length; i++ ) {
      addBtn[i].removeAttribute("style");
    }
  }
}
