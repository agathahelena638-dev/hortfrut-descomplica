// const titulo = document.querySelector("h4");
// const formulario = document.getElementById("contato");
// const itens = document.querySelectorAll("li");

const mensagem = document.querySelector("#mensagem");
mensagem.textContent = "Confira os produtoa frescos da semana!!!!!";

const btnModo = document.querySelector("#modoLeitura");
const conteudo = document.querySelector("main");

btnModo.addEventListener("click", function () {
  conteudo.classList.toggle("leitura-destaque");
});

const aviso = document.createElement("p");
aviso.textContent =
  "Atenção: COnfira os preços antes de enviar a sua compra!!!!";
aviso.classList.add("aviso");

document.querySelector("#contato").prepend(aviso);
