var getData = (function () {
  return function getURL(url, callback) {
    var request = new XMLHttpRequest()
    request.open("GET", url, true)
    request.send(null);
    request.addEventListener('load', function() {
      if (request.status < 400) {
        callback(request.responseText)
      }
      else {
        callback(null, new Error('Request failed: ' + req.statusText))
      }
    })
    request.addEventListener('error', function() {
        callback(null, new Error('Network error!'))
    })
  }
})()

getData('/data/products.json', function(content, error) {
  if (error != null)
    console.log('Failed to fetch products.json: ' + error)
  else
    var data = JSON.parse(content)
    for (var i = 0; i < data.result.length; i++) {
        console.log(data.result[i].title)
    }
})


