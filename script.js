let result = document.getElementById('result');

// eslint-disable-next-line no-unused-vars
function addDigit(digit) {
  result.value += digit;
}

// eslint-disable-next-line no-unused-vars
function clearResult() {
  result.value = '';
}

// eslint-disable-next-line no-unused-vars
function deleteDigit() {
  result.value = result.value.slice(0, -1);
}

// eslint-disable-next-line no-unused-vars
function operate(operator) {
  // eslint-disable-next-line eqeqeq
  if (result.value != '') {
    result.value += operator;
  }
}

// eslint-disable-next-line no-unused-vars
function calculate() {
  // eslint-disable-next-line eqeqeq
  if (result.value != '') {
    // eslint-disable-next-line no-eval
    let calculation = eval(result.value);
    result.value = calculation;
  }
}
