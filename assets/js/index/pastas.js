const listaPastas = document.querySelector('.lista-pastas')
const pontinhos = document.querySelector('.pontinhos')
let listaColunas = []

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
    listaColunas = document.querySelectorAll('.treinos')
    closeModal()
  })

  document.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
  });
  
  document.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });
  
  listaColunas.forEach((item) => {
    item.addEventListener("dragover", (e) => {
      const dragging = document.querySelector(".dragging");
      const applyAfter = getNewPosition(item, e.clientY);
  
      if (applyAfter) {
        applyAfter.insertAdjacentElement("afterend", dragging);
      } else {
        item.prepend(dragging);
      }
    });
  });
  
  function getNewPosition(column, posY) {
    const cards = column.querySelectorAll(".treino:not(.dragging)");
    let result;
  
    for (let refer_card of cards) {
      const box = refer_card.getBoundingClientRect();
      const boxCenterY = box.y + box.height / 2;
  
      if (posY >= boxCenterY) result = refer_card;
    }
  
    return result;
  }