/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), determineColors());
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

function determineColors() {
  if (window.location.pathname.includes("youtube")) {
    return {
      dotColor: '#FF0000',
      lineColor: '#8A0000'
    }
  } else if (window.location.pathname.includes("blizzard")) {
    return {
      dotColor: 'white',
      lineColor: 'lightgray'
    }
  } else {
    return {
      dotColor: '#add1fe',
      lineColor: '#65d8f7'
    }
  }
}