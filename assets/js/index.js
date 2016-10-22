console.log('you can use ES6 here : )')

var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('menu');

hamburger.addEventListener('click', menuToggle, false);

function menuToggle(){
  menu.classList.toggle('hide');
  console.log('toggled');
};

console.log(menu.classList);
console.log(hamburger);

$(document).ready(function(){
  checkDisplay();
});

function checkDisplay(){
  if($('p:nth-of-type(2)').css('display') === 'none'){
    $('#shipping-info').on('click', function () {
        $('p:nth-of-type(2)').slideToggle('slow');
    })
  };
};
