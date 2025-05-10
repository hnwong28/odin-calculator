let currentInput = "";
let currentOp = "";
let previousInput = "";

function appendNumber(num) {
  currentInput += num;
  document.querySelector("#display").value =
    `${previousInput} ${currentOp} ${currentInput}`;
}

function appendOperation(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  currentOp = op;
  previousInput = currentInput;
  currentInput = "";
  document.querySelector("#display").value = `${previousInput} ${currentOp}`;
}

function calculate() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  let previous = parseFloat(previousInput);
  let current = parseFloat(currentInput);
  switch (currentOp) {
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    case "*":
      result = previous * current;
      break;
    case "/":
      if (current === 0) {
        alert("TO INFINITY AND BEYOND");
        return;
      }
      result = Math.round((previous / current) * 10000) / 10000;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOp = "";
  previousInput = "";
  document.querySelector("#display").value = currentInput;
}

function clearScreen() {
  currentInput = "";
  previousInput = "";
  currentOp = "";
  document.querySelector("#display").value = "";
}
