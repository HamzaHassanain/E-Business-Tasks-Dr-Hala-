function AreaOfCircle() {
  const form = document.getElementById("area");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const radius = document.querySelector("#area #radius").value;
    const result = document.querySelector("#area #result");
    alert("The area of the circle is " + Math.PI * radius * radius);
    radius.value = "";
  });
}
function CalculateRoot() {
  const form = document.getElementById("root");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const number = document.querySelector("#root #number").value;
    const result = document.querySelector("#root #result");
    alert("The square root of the number is " + Math.sqrt(number));
    number.value = "";
  });
}

function ArrayFill() {
  const form = document.getElementById("array-fill");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const valuesString = document.querySelector("#array-fill #values").value;
    const result = document.querySelector("#array-fill #results");
    const values = valuesString.split(" ");
    const actualValues = [];
    for (let i = 0; i < values.length; i++)
      if (!isNaN(values[i])) actualValues.push(parseInt(values[i]));
    if (actualValues.length == 3) {
      result.innerHTML = "";
      result.innerHTML += `<h1>The values you entered ${valuesString}</h1>`;
      result.innerHTML += `<h1>The Sum of the values: ${actualValues.reduce(
        (a, b) => a + b,
        0
      )}</h1>`;
      result.innerHTML += `<h1> The Multiplication of the values: ${actualValues.reduce(
        (a, b) => a * b,
        1
      )}</h1>`;
      const division = actualValues[0] / actualValues[1] / actualValues[2];
      result.innerHTML += `<h1>The Division of the values: ${division}</h1>`;
    } else if (actualValues.length == 5) {
      result.innerHTML = "";
      result.innerHTML += `<h1>The values you entered ${valuesString}</h1>`;
      actualValues.sort((a, b) => a - b);
      let Content1 = "<h1> Your Values in Ascending Order: ";
      for (let i = 0; i < actualValues.length; i++) {
        Content1 += actualValues[i] + " ";
      }
      Content1 += "</h1>";

      result.innerHTML += Content1;

      actualValues.reverse();

      let Content2 = "<h1> Your Values in Descending Order: ";
      for (let i = 0; i < actualValues.length; i++) {
        Content2 += actualValues[i] + " ";
      }
      Content2 += "</h1>";

      result.innerHTML += Content2;
    } else {
      alert("Please enter 3 or 5 values");
    }
  });
}

function FuncWithTwoParametersOnly(p1, p2) {
  const ps = Array.from(arguments);

  if (ps.length != 2) {
    throw new Error("Please enter 2 parameters");
  }

  return ps;
}

function AddNValues(...values) {
  return values.reduce((a, b) => a + b, 0);
}

function ReverseMyParams(...values) {
  return values.reverse();
}

AreaOfCircle();

CalculateRoot();

ArrayFill();

console.log(FuncWithTwoParametersOnly(3, 1, 2));
