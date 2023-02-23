const listaPastas = document.querySelector('.lista-pastas')
let listaColunas = []
// let listaPontinhos = []

  buttonC.addEventListener('click', (event) => {
    event.preventDefault()
    const inputNome = document.querySelector("#nomePasta")
    const nomePasta = inputNome.value
    let template = document.querySelector(".template-pastas");
    let itemNovo = template.content.cloneNode(true);
    
    itemNovo = itemNovo.querySelector(".container-pasta")
    itemNovo.children[0].textContent = nomePasta
    listaPastas.appendChild(itemNovo)
    inputNome.value = ""
    listaColunas = document.querySelectorAll('.treinos')
    listaPontinhos = document.querySelectorAll('.pontinhos')
    closeModal()
  })

  // listaPontinhos.forEach((item) => {
  //   item.addEventListener('click', (event) => {
  //     console.log("pontinho")
  //   })
  // })

  listaPastas.addEventListener("click", function(event){
    let alvoEvento = event.target
    if (alvoEvento.classList.contains("pontinhos")) {
        let paiDoAlvo = alvoEvento.parentNode
        paiDoAlvo.classList.add("fadeOut")
        setTimeout(function(){
          paiDoAlvo.remove()
        },500)
        
    }
  })

 