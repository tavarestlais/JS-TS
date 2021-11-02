function Calculator() {
  this.display = document.querySelector(".display");

  this.init = () => {
    this.catchClick();
    this.catchEnter();
  };

  this.catchEnter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.keycode === 13) {
        this.doCalc();
      }
    });
  };

  this.catchClick = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.doCalc();
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => {
    this.display.value = "";
  };

  this.del = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.doCalc = () => {
    try {
      const calc = eval(this.display.value);

      if (!calc) {
        alert("Invalid calc");
        return;
      }

      this.display.value = calc;
    } catch (e) {
      alert("Invalid count");
      return;
    }
  };
}

const calculator = new Calculator();
calculator.init();
