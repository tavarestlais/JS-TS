function createCalc() {
  return {
    //attributes
    display: document.querySelector(".display"),

    init() {
      this.clickBtn();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keycode === 13) {
          this.doCalc();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    doCalc() {
      let calc = this.display.value;
      try {
        calc = eval(calc);
        if (!calc) {
          alert("Invalid calculation");
          return;
        }

        this.display.value = String(calc);
      } catch (e) {
        alert("Invalid calculation");
        return;
      }
    },

    //methods
    clickBtn() {
      //this > calculator
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnStopDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }
        if (el.classList.contains("btn-eq")) {
          this.doCalc();
        }
      });
    },

    btnStopDisplay(value) {
      this.display.value += value;
    },
  };
}

const calculator = createCalc();
calculator.init();
