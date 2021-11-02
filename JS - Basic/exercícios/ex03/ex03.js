const elements = [
  { tag: "p", text: "Frase 01" },
  { tag: "div", text: "Frase 02" },
  { tag: "footer", text: "Frase 03" },
  { tag: "section", text: "Frase 04" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
  let { tag, text } = elements[i];
  let createdTag = document.createElement(tag);
  createdTag.innerText = text;
  div.appendChild(createdTag);
}

container.appendChild(div);
