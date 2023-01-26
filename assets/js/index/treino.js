buttonCT.addEventListener('click', (event) => {
    event.preventDefault()
    const inputNome = document.querySelector("#nomePasta-t")
    const nomePasta = document.querySelector("#nomePasta-t").value
    let template = document.querySelector(".template-treino");
    let treino = template.content.cloneNode(true);

    treino.children[0].children[0].textContent = nomePasta

    const listaTreinos = document.querySelector('.treinos')
    listaTreinos.appendChild(treino)

    inputNome.value = ""
    closeModalT()
  })

const treinosArrastaveis = document.querySelectorAll(".treino']");

treinosArrastaveis.forEach((treinoArrastevel) => {
    treinoArrastevel.addEventListener("dragstart", comecarArrastar);
})

function comecarArrastar(){
    console.log("funcionou")
}