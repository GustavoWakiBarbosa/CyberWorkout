const button = document.querySelector('.button-pasta');
const buttonF = document.querySelector('#button-cancelar')
const buttonC = document.querySelector('#button-criar')
const container = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const listaPastas = document.querySelector('.lista-pastas');

const activeModalClass = 'modal-show';

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);


button.addEventListener('click', openModal);
container.addEventListener('click', (event) => {
    if (modal.contains(event.target)) return;
    
    closeModal();
});

button.addEventListener('click', (event) => {
    event.preventDefault()
    openModal()
  })
  
  buttonF.addEventListener('click', (event) => {
    event.preventDefault()
    closeModal()
  })

  buttonC.addEventListener('click', (event) => {
    event.preventDefault()
    const nomePasta = document.querySelector("#nomePasta").value
    let template = document.querySelector("template");
    let itemNovo = template.content.cloneNode(true);
    itemNovo = itemNovo.querySelector(".container-pasta")
    // console.log(itemNovo.children[1])
    itemNovo.children[1].textContent = nomePasta
    console.log(itemNovo)

    const main = document.querySelector("main")
    main.appendChild(itemNovo)
  })

  // seta.addEventListener('click', () => {

  // })

  