const button = document.querySelector('.button-pasta');
const buttonF = document.querySelector('#button-cancelar')
const container = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');

const activeModalClass = 'modal-show';

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

button.addEventListener('click', () => {
    event.preventDefault()
    openModal()
  })
  
  buttonF.addEventListener('click', () => {
    event.preventDefault()
    closeModal()
  })

  button.addEventListener('click', openModal);
  container.addEventListener('click', (event) => {
      if (modal.contains(event.target)) return;
      
      closeModal();
  });
  