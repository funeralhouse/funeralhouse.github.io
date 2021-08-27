var mybutton = document.getElementById("top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const iconMenu = document.querySelector('.menu_icon');
if (iconMenu){
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function (e) {
iconMenu.classList.toggle('_active');
menuBody.classList.toggle('_active');
  })
}