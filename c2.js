const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      result.value = "";
    } else if (value === "=") {
      try {
        result.value = eval(result.value);
      } catch {
        result.value = "Error";
      }
    } else {
      result.value += value;
    }
  });
});
