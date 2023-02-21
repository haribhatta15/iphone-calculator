const calculator = document.querySelector(".calculator");
const result = calculator.querySelector(".result");
const equals = calculator.querySelector(".equals");
const clear = calculator.querySelector(".clear");

function calculate() {
  const calculation = result.textContent;
  result.textContent = eval(calculation);
}

function clearResult() {
  result.textContent = "";
}

calculator.addEventListener("click", (event) => {
  const target = event.target;
  const value = target.textContent;

  if (target.matches(".number")) {
    result.textContent += value;
  }

  if (target.matches(".decimal")) {
    if (!result.textContent.includes(".")) {
      result.textContent += value;
    }
  }

  if (target.matches(".operator")) {
    result.textContent += ` ${value} `;
  }

  if (target.matches(".equals")) {
    calculate();
  }

  if (target.matches(".clear")) {
    clearResult();
  }
});
