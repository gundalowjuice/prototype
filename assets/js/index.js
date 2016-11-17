console.log('you can use ES6 here : )')

var total = 0;

$(document).ready(function(){
  checkDisplay();
  plus();
  minus();




  // $('#basket-qty span:nth-of-type(3)').click(function(){
  //   $('#basket-qty span:nth-of-type(2)').text('add to cart');
  // })

  $('#hamburger svg').click(function(){
    $('#menu').fadeToggle('fast');
    console.log('clicked');
  })

  $('.carousel').flickity({
    cellAlign: 'center',
    wrapAround: true,
    isSelected: true
  })

  var $carousel = $('.carousel').flickity();
  var flkty = $carousel.data('flickity');
  var juice = (flkty.selectedIndex);

  $carousel.on( 'select.flickity', function() {
    var item = (flkty.selectedIndex);
    console.log(item);
    if(item === 0){
      $('.mainstay-green').fadeIn('slow');
      $('.starboard-strawberry').fadeOut('fast');
      $('.anchor-case').fadeOut('fast');
    }else if (item === 1){
      $('.starboard-strawberry').fadeIn('slow');
      $('.mainstay-green').fadeOut('fast');
      $('.anchor-case').fadeOut('fast');
    }else if(item === 2){
      $('.anchor-case').fadeIn('fast');
      $('.mainstay-green').fadeOut('fast');
      $('.starboard-strawberry').fadeOut('fast');
    }

    if(item === 0){
      $('#nutrition').addClass('msg').removeClass('ss ac');
    } else if(item === 1) {
      $('#nutrition').addClass('ss').removeClass('msg ac');
    } else if(item === 2) {
      $('#nutrition').addClass('ac').removeClass('msg ss');
    }

    if(item === 0){
      $('#basket-qty > p').addClass('msg').removeClass('ss ac');
    }else if(item === 1){
      $('#basket-qty > p').addClass('ss').removeClass('msg ac');
    }else if(item === 2){
      $('#basket-qty > p').addClass('ac').removeClass('msg ss');
    }

    if(item === 0){
      $('#basket-qty span:nth-of-type(1)').addClass('msg').removeClass('ss ac');
    }else if(item === 1){
      $('#basket-qty span:nth-of-type(1)').addClass('ss').removeClass('msg ac');
    }else if(item === 2){
      $('#basket-qty span:nth-of-type(1)').addClass('ac').removeClass('msg ss');
    }

    if(item === 0){
      $('#ingredients h2').addClass('msg').removeClass('ss').removeClass('ac');
    }else if(item === 1){
      $('#ingredients h2').addClass('ss').removeClass('msg').removeClass('ac');
    }else if(item === 2){
      $('#ingredients h2').addClass('ac').removeClass('ss').removeClass('msg');
    }
  });




  (function () {
    var carousel, next, seats;
    carousel = $('#carousel');
    seats = $('.carousel-img');
    next = function (el) {
        if (el.next().length > 0) {
            return el.next();
        } else {
            return seats.first();
        }
    };
    $('.toggle').on('click', function (e) {
        var el, i, j, new_seat, ref;
        el = $('.is-ref').removeClass('is-ref');
        new_seat = next(el);
        new_seat.addClass('is-ref').css('order', 2);
        for (i = j = 2, ref = seats.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
            new_seat = next(new_seat).css('order', i);
        }
        carousel.removeClass('is-set');
        return setTimeout(function () {
            return carousel.addClass('is-set');
        }, 50);
    });
}.call(this));


  $('#search svg').click(function(){
    $('#search input[type="text"], #search button').toggle('slow')
  })

  $('#search svg').click(function(){
    $('#search input[type="text"], #search button').toggle('slow')
  })
});

  $('#cart').click(function(){
    $('#cart-dropdown').slideToggle('slow');
  });

function checkDisplay(){
  if($('p:nth-of-type(2)').css('display') === 'none'){
    $('#shipping-info').on('click', function(){
        $('p:nth-of-type(2)').slideToggle('slow');
    })
  };
};


function plus(){
  $('#basket-qty span:nth-of-type(4)').click(function(){
    total+=7;
    $('#basket-qty span:nth-of-type(2)').text(total);
    console.log(total);
  })
};

function minus(){
  if(total >= 7){
    $('#basket-qty span:nth-of-type(1)').click(function(){
      total-=7;
      $('#basket-qty span:nth-of-type(2)').text(total);
      console.log(total)
    })
  }else{
    console.log('stop');
  }
}

function checkTotal(){
  console.log('check total' + total);
}
