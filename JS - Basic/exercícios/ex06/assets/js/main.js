class validaForm {
  constructor() {
    this.form = document.querySelector(".formulario");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.checkFields();
    const validPassword = this.checkPassword();

    if (validFields && validPassword) {
      alert("Formulário enviado.");
      this.form.submit();
    }
  }

  checkPassword() {
    let valid = true;

    const password = this.form.querySelector(".senha");
    const repeatPassword = this.form.querySelector(".repetir-senha");

    if (password.value !== repeatPassword.value) {
      valid = false;
      this.createError(
        password,
        "Campos Senha e Repetir Senha precisam ser iguais"
      );
      this.createError(
        repeatPassword,
        "Campos Senha e Repetir Senha precisam ser iguais"
      );
    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.createError(
        password,
        "Campos Senha precisa ter entre 6 e 12 caracteres"
      );
    }
    return valid;
  }

  checkFields() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll(".validar")) {
      const label = field.previousElementSibling.innerText;

      if (!field.value) {
        this.createError(field, `Campo '${label}' não pode estar vazio`);
        valid = false;
      }

      if (field.classList.contains("cpf")) {
        if (!this.validaCPF(field)) {
          valid = false;
        }
      }

      if (field.classList.contains("usuario")) {
        if (!this.validaUsuario(field)) {
          valid = false;
        }
      }
    }
    return valid;
  }

  validaCPF(field) {
    const cpf = new validaCPF(field.value);
    if (!cpf.valida()) {
      this.createError(field, "CPF Inválido");
      return false;
    }
    return true;
  }

  validaUsuario(field) {
    const usuario = field.value;
    let valid = true;
    if (usuario.length > 12 || usuario.length < 3) {
      this.createError(
        field,
        "Nome de usuário deverá ter entre 3 e 12 caracteres"
      );
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(
        field,
        ">Nome de usuário só pode conter letras e/ou números"
      );
      valid = false;
    }
    return true;
  }

  createError(field, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}

const valida = new validaForm();
