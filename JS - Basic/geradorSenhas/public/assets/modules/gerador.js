const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const maiuscula = () => String.fromCharCode(rand(65, 91));
const minuscula = () => String.fromCharCode(rand(97, 123));
const numeros = () => String.fromCharCode(rand(48, 58));
const simbolos = ",.;^~[]{}:?!@#$%&*()_-+=";
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qnt, mai, min, num, simbol) {
  const senhaArray = [];
  qtd = Number(qtd);
  for (let i = 0; i < qnt; i++) {
    mai && senhaArray.push(maiuscula());
    min && senhaArray.push(minuscula());
    num && senhaArray.push(numeros());
    simbol && senhaArray.push(geraSimbolos());
  }
  console.log(senhaArray.join("").slice(0, qtd));
}

geraSenha(10, true);
