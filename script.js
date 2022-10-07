let inputWeight = document.querySelector(".input-weight");
let inputHeight = document.querySelector(".input-height");
let calculate = document.querySelector(".calculate");
let result = document.querySelector(".result");
let statement = document.querySelector(".result-statement");
let height, weight, BMI;

let reset = document.querySelector(".reset");

calculate.addEventListener("click", () => {
  weight = inputWeight.value;
  height = inputHeight.value;
  BMI = weight / (height / 100) ** 2;
  result.innerHTML = BMI;

  if (isNaN(BMI) == true) {
    statement.innerHTML = "input number only";
    result.innerHTML = "not found bruh!!"
  } else {
    if (BMI < 18.5) {
      statement.innerHTML = `your ${BMI} which means you are <h1> Underweight </h1>`;
    } else if (BMI >= 18.5 && BMI < 24.9) {
      statement.innerHTML = `your ${BMI} which means you are <h1> Normalweight </h1>`;
    } else if (BMI >= 25 && BMI <= 29.9) {
      statement.innerHTML = `your ${BMI} which means you are <h1> Overweight </h1>`;
    } else {
      statement.innerHTML = `your ${BMI} which means you are <h1> Obesity </h1>`;
    }
  }
});

reset.addEventListener("click", () => {
  result.innerHTML = "";
  statement.innerHTML = "";
  inputHeight.value = "";
  inputWeight.value = "";
});
