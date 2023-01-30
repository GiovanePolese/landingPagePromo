const botaoInicial = document.getElementById('botaoInicial');
const howItWorks = document.getElementById('howItWorks');
const assurance = document.getElementById('assurance');
const price = document.getElementById('price');
const testimonialsButton = document.getElementById('testimonialsButton');
const videoDiv = document.getElementById('vid_63ca762f0fbd55000a23e59f');

let isVisible = false;

setTimeout(() => {
  if (videoDiv.querySelector('video').currentTime >= 480) {
    showElements();
    isVisible = true;
  }
}, 3000)

setInterval(() => {
  if (videoDiv.querySelector('video').currentTime >= 480 && !isVisible) {
    showElements();
    isVisible = true;
  }
}, 1000 * 30)

function showElements() {
  botaoInicial.classList.remove("hiden");
  howItWorks.classList.remove("hiden");
  assurance.classList.remove("hiden");
  price.classList.remove("hiden");
  testimonialsButton.classList.remove("hiden");
}