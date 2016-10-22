
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
