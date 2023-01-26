const listaPastas = document.querySelector('.lista-pastas')
const pontinhos = document.querySelector('.pontinhos')

  buttonC.addEventListener('click', (event) => {
    event.preventDefault()
    const inputNome = document.querySelector("#nomePasta")
    const nomePasta = document.querySelector("#nomePasta").value
    let template = document.querySelector(".template-pastas");
    let itemNovo = template.content.cloneNode(true);
    
    itemNovo = itemNovo.querySelector(".container-pasta")
    itemNovo.children[0].textContent = nomePasta
    listaPastas.appendChild(itemNovo)
    inputNome.value = ""
    closeModal()
  })

  // pontinhos.addEventListener('click', (event) => {
  //   console.log(event)
  // })
