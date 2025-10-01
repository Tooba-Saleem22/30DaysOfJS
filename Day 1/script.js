const bulb = document.getElementById('bulb');
const button = document.getElementById('toggleBtn');

button.addEventListener('click', function () {
  if (bulb.src.includes("bulboff")) {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    button.innerText = 'Turn OFF';
  } else {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    button.innerText = "Turn ON";
  }
});
