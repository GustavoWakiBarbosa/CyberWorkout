const buttonT = document.querySelector('.button-treino')
const buttonFT = document.querySelector('#button-cancelar-t')
const buttonCT = document.querySelector('#button-criar-t')
const containerT = document.querySelector('.modal-container-t')
const modalT = document.querySelector('.modal-t')

const activeModalClassT = 'modal-show';

const openModalT = () => containerT.classList.add(activeModalClassT);
const closeModalT = () => containerT.classList.remove(activeModalClassT);

buttonT.addEventListener('click', (event) => {
    event.preventDefault()
    openModalT()
  })
  
containerT.addEventListener('click', (event) => {
    if (modalT.contains(event.target)) return;
    
    closeModalT();
});

buttonFT.addEventListener('click', (event) => {
    event.preventDefault()
    closeModalT()
})

