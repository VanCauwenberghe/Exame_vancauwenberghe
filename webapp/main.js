var counter = 0;

function Increase() {
  counter++;
  updateDisplay(counter);
}

function Decrease() {
  counter--;
  updateDisplay(counter);
}

function Reset() {
  counter = 0;
  updateDisplay(counter);
}

function updateDisplay(result) {
  document.getElementById('display').innerText = counter;
}