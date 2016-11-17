(function () {

  var total = 0

  var plus = document.querySelector('#basket-qty span:nth-of-type(4)')
  var minus = document.querySelector('#basket-qty span:nth-of-type(1)')
  var displayTotal = document.querySelector('#basket-qty span:nth-of-type(2)')

  plus.addEventListener('click', incrementQty, false)
  minus.addEventListener('click', decrementQty, false)

  function incrementQty (e) {
    total+=7
    displayTotal.innerHTML = total
    console.log('checking total ... total is ' + total + '.')
  }

  function decrementQty (e) {
    if (total > 0) {
      total-=7
      displayTotal.innerHTML = total
      console.log('checking total ... total is ' + total + '.')
    }
  }

})()
