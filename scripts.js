const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")
  return value
}

var end = new Date('10/02/2023 11:59 PM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {

    clearInterval(timer);
    document.getElementById('countdouwn').innerHTML = '- Acabaram as inscrições!';

    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  document.getElementById('countdouwn').innerHTML = 'TEMPO RESTANTE - ' + ("0" + hours).slice(-2) + ':';
  document.getElementById('countdouwn').innerHTML += ("0" + minutes).slice(-2) + ':';
  document.getElementById('countdouwn').innerHTML += ("0" + seconds).slice(-2);
}

timer = setInterval(showRemaining, 1000);

