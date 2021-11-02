/* const nome = "Charlotte";
const sobrenome = "Galli";

const falaNome = () => nome + " " + sobrenome;

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
 */

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}
const nome = "Charlotte";
const sobrenome = "Galli";

module.exports = { Pessoa, nome, sobrenome };
