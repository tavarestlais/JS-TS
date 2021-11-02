class validaCPF {
  construtor(sentCPF) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: sentCPF.replace(/\D+/g, ""),
    });
  }

  isSequence() {
    return (
      this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    );
  }

  createNewCpf() {
    const partialCPF = this.cpfLimpo.slice(0, -2);
    const firstDigit = this.geraDigito(partialCPF);
    const secondDigit = this.geraDigito(partialCPF + firstDigit);
    this.newCPF = partialCPF + firstDigit + secondDigit;
  }

  static geraDigito(partialCPF) {
    let total = 0;
    let counter = partialCPF.length + 1;

    for (let stringNumerica of partialCPF) {
      total += counter * Number(stringNumerica);
      counter--;
    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequence()) return false;
    this.createNewCpf();

    return this.newCPF === this.cpfLimpo;
  }
}

let validacpf = new validaCPF("863.421.260-20");
if (validacpf.valida()) {
  console.log("CPF válido");
} else {
  console.log("CPF Inválido!");
}
