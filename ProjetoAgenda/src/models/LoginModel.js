const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
  email:{type: String, required: true},
  password:{type: String, required: true},
});

const LoginModel = mongoose.model('Login', LogineSchema);

class Login {
  constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async createUser(){
    this.valida();
    if(this.errors.length > 0) return;

    try{
      this.user = await LoginModel.create(this.body);
    }catch(e){
      console.log(e)
    }
  }

  valida(){
    this.cleanData();
    //validação
    //email precisa ser válido
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!')
    //senha precisa ter entre 5 e 30 caracteres
    if(this.body.password.length < 5 || this.body.password.length > 30 ){
      this.errors.push('Sua senha precisa ter entre 5 e 30 caracteres')
    }
  }

  cleanData(){
    for(const key in this.body){
      if(typeof this.body[key] !== 'string'){
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
    }
  }
}

module.exports = Login;
