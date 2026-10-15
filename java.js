//Parte 1 = puxar os ids
const titulo = document.querySelector("#titulo");
const texto = document.querySelector("#texto");
const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");
 
//parte 2 = interaçao

botao.addEventListener("click", function() {
    titulo.textContent = "Você clicou no botão!";
    texto.textContent = "Este programa usa java script!";
    mensagem.textContent = "Todas as alteraçoes foram feitas!";
    titulo.style.color = "blue";



});

// MODO ESCURO: coloque no final
modo.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
});

   