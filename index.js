const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.easteregg; // "some_value"
var hka = document.getElementById('param1-id')
if (value == "true") {
  hka.innerText = "You found an easter egg #1!"
}

function button() {
  if (value == "true") {
    var audio = new Audio("Media/oof.mp3")
    audio.play()
  }
}