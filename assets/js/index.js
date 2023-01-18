const buttonOpenModal = document.querySelector(".button-pasta")
const buttonCloseModal = document.querySelector("#button-cancelar")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const lista = [buttonOpenModal, buttonCloseModal, fade]

function toggleModal() {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

lista.forEach((element) => {
    element.addEventListener("click", () => toggleModal())
})
