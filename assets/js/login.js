const professor = document.querySelector("#tipo-cadastro-prof")
const aluno = document.querySelector("#tipo-cadastro-aluno")
const areaLogin = document.querySelector(".area-login")
const registro = document.querySelector(".registrar")
const principal = document.querySelector(".principal")

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