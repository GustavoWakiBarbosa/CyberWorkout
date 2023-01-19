const button = document.querySelector('.button-pasta');
const buttonF = document.querySelector('#button-cancelar')
const container = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');

button.addEventListener('click', () => {
    container.classList.add("modal-show")
})

buttonF.addEventListener('click', () => {
    container.classList.remove("modal-show")
})
