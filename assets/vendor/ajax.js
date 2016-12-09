// because IEFE's are cool
(function (window) {

  // create products object and make it a property on the global window object
  var products = window.products || {}

  // get this whole ajax thing going
  var request = new XMLHttpRequest()

  request.open('GET', '/data/products.json', true)
  request.send(null)
  request.addEventListener('load', function() {
    var data = JSON.parse(request.responseText)

    // throw a few slugs into the console
    for (var i = 0; i < data.result.length; i++) {
      console.log(data.result[i].slug)
    }

    // "export" our data so we have easy access to it in the console
    // e.g. try this in the console: products.result[0].title
    products = data
    window.products = products
  })
})(window)
