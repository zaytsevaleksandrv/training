var slideIndex = 1;
showList( slideIndex );

function plusItems( n ) {
  showList((slideIndex += n));
}

function currentItem( n ) {
  showList((slideIndex = n));
}

function showList( n ) {
  var i;
  var imgBig = document.getElementsByClassName("slider__img");
  var preview = document.getElementsByClassName("slider__priview-img");
  if (n > imgBig.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = imgBig.length;
  }
  for (i = 0; i < imgBig.length; i++) {
    imgBig[i].style.display = "none";
    imgBig[i].classList.remove('active');
  }
  for (i = 0; i < preview.length; i++) {
    preview[i].className = preview[i].className.replace(" active", "");
  }
  imgBig[slideIndex - 1].classList.add('active');
  imgBig[slideIndex - 1].style.display = "block";
  preview[slideIndex - 1].className += " active";
}