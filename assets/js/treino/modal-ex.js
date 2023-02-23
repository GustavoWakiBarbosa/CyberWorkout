const buttonEx = document.querySelector('.add-exercicio')
const buttonF = document.querySelector('#button-cancelar-ex')
const buttonC = document.querySelector('#button-criar-ex')
const container = document.querySelector('.modal-container-ex')
const modal = document.querySelector('.modal-ex')

const activeModalClass = 'modal-show';

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);


buttonEx.addEventListener('click', (event) => {
    event.preventDefault()
    openModal()
  })
  

buttonF.addEventListener('click', (event) => {
    event.preventDefault()
    closeModal()
})

container.addEventListener('click', (event) => {
    if (modal.contains(event.target)) return;
    
    closeModal();
});



