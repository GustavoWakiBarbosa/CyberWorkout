const professor = document.querySelector("#tipo-cadastro-prof")
const aluno = document.querySelector("#tipo-cadastro-aluno")
const areaLogin = document.querySelector(".area-login")
const registro = document.querySelector(".registrar")
const principal = document.querySelector(".principal")
////////////////TRATAMENTO DE ERRO AO LOGAR////////////////
const email = document.querySelector(".email")
const senha = document.querySelector(".senha")
const btnEntrar = document.querySelector(".btn-entrar")
const selecao = document.querySelector(".selecionar-conta")
const modal = document.querySelector(".modal")
const logo = document.querySelector(".logo")
const btnTn = document.querySelector(".btn-tn")
////////////////////////////////////////////////////////////

function retirarBordaDeErro(){
    email.classList.remove("teste")
    senha.classList.remove("teste")
}

professor.addEventListener("click", () => {
    areaLogin.style.display = "flex";
    registro.style.display = "block"
    principal.style.backgroundColor = "var(--roxo-escuro)"
})   

aluno.addEventListener("click", () => {
    areaLogin.style.display = "flex";
    registro.style.display = "none"
    principal.style.backgroundColor = "var(--rosa-escuro)"
})

btnEntrar.addEventListener("click", () => {
    if(email.value === "teste@gmail.com" && senha.value === "123"){
        window.location.href = "../index.html";
    }else if(email.value === "" && senha.value === ""){
        email.classList.add("teste")
        senha.classList.add("teste")
        setTimeout(() => {  retirarBordaDeErro(); }, 2000);
    }else if(email.value === ""){
        email.classList.add("teste")
        setTimeout(() => {  retirarBordaDeErro(); }, 2000);
    }else if(senha.value === ""){
        senha.classList.add("teste")
        setTimeout(() => {  retirarBordaDeErro(); }, 2000);
    }else{
        selecao.style.display = "none"
        areaLogin.style.display = "none"
        modal.style.display = "Flex"
        logo.style.display = "none"
    }
})

btnTn.addEventListener("click", () => {
    modal.style.display = "none"
    selecao.style.display = "block"
    areaLogin.style.display = "flex"
    logo.style.display = "block"
})