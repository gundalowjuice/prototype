console.log('you can use ES6 here : )')

var total = 0;

$(document).ready(function(){
  checkDisplay();
  plus();
  minus();




  // $('#basket-qty span:nth-of-type(3)').click(function(){
  //   $('#basket-qty span:nth-of-type(2)').text('add to cart');
  // })

// navigation drop down

  $('#hamburger svg').click(function(){
    $('#menu').fadeToggle('fast');
    console.log('clicked');
  })


// initialize flickity

  $('.carousel').flickity({
    cellAlign: 'center',
    wrapAround: true,
    isSelected: true,
    initialIndex: 0
  })

// flickity

  var $carousel = $('.carousel').flickity();
  var flkty = $carousel.data('flickity');
  var juice = (flkty.selectedIndex);

  $carousel.on( 'select.flickity', function() {
    var item = (flkty.selectedIndex);
    console.log(item);

  // change juice content based on juice display

      if(item === 0){
        $('.mainstay-green').fadeIn('slow');
        $('.starboard-strawberry').fadeOut('fast');
        $('.anchor-case').fadeOut('fast');
      }else if (item === 1){
        $('.starboard-strawberry').fadeIn('slow');
        $('.mainstay-green').fadeOut('fast');
        $('.anchor-case').fadeOut('fast');
      }else if(item === 2){
        $('.anchor-case').fadeIn('slow');
        $('.mainstay-green').fadeOut('fast');
        $('.starboard-strawberry').fadeOut('fast');
      }

    // change juice nutrition info based on juice display

      if(item === 0){
        $('#msg-nutrition').fadeIn('slow');
        $('#ss-nutrition').fadeOut('fast');
        $('#ac-nutrition').fadeOut('fast');
      } else if(item === 1) {
        $('#ss-nutrition').fadeIn('slow');
        $('#msg-nutrition').fadeOut('fast');
        $('#ac-nutrition').fadeOut('fast');
      } else if(item === 2) {
        $('#ac-nutrition').fadeIn('slow');
        $('#msg-nutrition').fadeOut('fast');
        $('#ss-nutrition').fadeOut('fast');
      }

    // change color for stars

    if(item === 0){
      $('#stars').addClass('msg').removeClass('ss ac');
    }else if(item === 1){
      $('#stars').addClass('ss').removeClass('msg ac');
    }else if(item === 2){
      $('#stars').addClass('ac').removeClass('msg ss');
    }

    //change basket color based on juice display

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

  // change color for ingredient section

      if(item === 0){
        $('#ingredients h2').addClass('msg').removeClass('ss ac');
      }else if(item === 1){
        $('#ingredients h2').addClass('ss').removeClass('msg ac');
      }else if(item === 2){
        $('#ingredients h2').addClass('ac').removeClass('ss msg');
      }

      if(item === 0){
        $('#icons').addClass('msg').removeClass('ss ac');
      }else if(item === 1){
        $('#icons').addClass('ss').removeClass('msg ac');
      }else if(item === 2){
        $('#icons').addClass('ac').removeClass('ss msg');
      }

      if(item === 0){
        $('#ingredient-content').addClass('msg').removeClass('ss ac');
      }else if(item === 1){
        $('#ingredient-content').addClass('ss').removeClass('msg ac');
      }else if(item === 2){
        $('#ingredient-content').addClass('ac').removeClass('ss msg');
      }

  // change review color
  if(item === 0){
    $('#reviews h2:nth-of-type(1)').addClass('msg').removeClass('ss ac');
  }else if(item === 1){
    $('#reviews h2:nth-of-type(1)').addClass('ss').removeClass('msg ac');
  }else if(item === 2){
    $('#reviews h2:nth-of-type(1)').addClass('ac').removeClass('ss msg');
  }

  if(item === 0){
    $('.review-content').addClass('msg').removeClass('ss ac');
  }else if(item === 1){
    $('.review-content').addClass('ss').removeClass('msg ac');
  }else if(item === 2){
    $('.review-content').addClass('ac').removeClass('ss msg');
  }

  if(item === 0){
    $('.review-content span').addClass('msg').removeClass('ss ac');
  }else if(item === 1){
    $('.review-content span').addClass('ss').removeClass('msg ac');
  }else if(item === 2){
    $('.review-content span').addClass('ac').removeClass('ss msg');
  }


  // end of flickity

  })

// ingredient icons

  $('svg.strawberry').click(function(){
    $('#ingredient-content .strawberry').toggle();
  })

  $('svg.pineapple').click(function(){
    $('#ingredient-content .pineapple').toggle();
  })

  $('svg.basil').click(function(){
    $('#ingredient-content .basil').toggle();
  })

// toggle nutrition labels

  $('#msg-nutrition h2').click(function(){
    $('#msg-nutrition img').slideToggle('slow');
    console.log('clicked');
  });

  $('#ss-nutrition h2').click(function(){
    $('#ss-nutrition img').toggle('slow');
  });

// search toggle

  $('#search svg').click(function(){
    $('#search input[type="text"], #search button').toggle('slow')
  })

  $('#search svg').click(function(){
    $('#search input[type="text"], #search button').toggle('slow')
  })

// cart drop down

  $('#cart').click(function(){
    $('#cart-dropdown').slideToggle('slow');
  });

// end of document ready

});



function checkDisplay(){
  if($('p:nth-of-type(2)').css('display') === 'none'){
    $('#shipping-info').on('click', function(){
        $('p:nth-of-type(2)').slideToggle('slow');
    })
  };
};


function plus(){
  $('#basket-qty span:nth-of-type(3)').click(function(){
    total+=7;
    $('#basket-qty span:nth-of-type(2)').text(total + ' Added to Basket');
    console.log(total);
  })
};

function minus(){
    $('#basket-qty span:nth-of-type(1)').click(function(){
      if(total > 0){
      total-=7;
      $('#basket-qty span:nth-of-type(2)').text(total + ' Added to Basket');
    }else{
        $('#basket-qty span:nth-of-type(2)').text('Added to Basket');
    }
  })
}

function checkTotal(){
  console.log('check total' + total);
}
