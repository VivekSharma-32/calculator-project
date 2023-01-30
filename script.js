let result = document.getElementById("inputText");

let calculate = (number) => {
  result.value += number;
};

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid input value");
  }
};

function clr() {
  result.value = "";
}

let del = () => {
  result.value = result.value.slice(0, -1);
};
