(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      console.log("Clicked button value:", value); // Debugging line
      screen.value += value;
    });
  });

  equal.addEventListener("click", function () {
    if (screen.value === "") {
      screen.value = "";
    } else {
      try {
        console.log("Input value:", screen.value); // Debugging line
        let answer = eval(screen.value);
        console.log("Evaluated result:", answer); // Debugging line
        if (isNaN(answer)) {
          screen.value = "Error"; // Display an error message for invalid expressions
        } else {
            screen.value = answer;
        }
      } catch (error) {
        screen.value = "Error"; // Display an error message for syntax errors
      }
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
