let lista = []


buttonCT.addEventListener('click', (event) => {
    event.preventDefault()
    const inputNome = document.querySelector("#nomePasta-t")
    const nomePasta = document.querySelector("#nomePasta-t").value
    let template = document.querySelector(".template-treino");
    let treino = template.content.cloneNode(true);

    treino.children[0].children[0].textContent = nomePasta

    const listaTreinos = document.querySelector('.treinos-soltos')
    listaTreinos.appendChild(treino)
    lista = document.querySelectorAll('.treino')
    inputNome.value = ""
    closeModalT()
  })



  let treinos = document.querySelectorAll(".treinos");
  let treino = document.querySelectorAll(".treino");

treino.forEach(function(treino) {
  treino.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("text/plain", treino.id);
  });
});

treinos.forEach(function(treinos) {
  treinos.addEventListener("dragover", function(e) {
    e.preventDefault();
  });

  treinos.addEventListener("drop", function(e) {
    e.preventDefault();
    let idTreino = e.dataTransfer.getData("text");
    let treino = document.getElementById(idTreino);
    treinos.appendChild(treino);
  });
});




