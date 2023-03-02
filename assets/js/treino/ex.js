const listaEx = document.querySelector(".lista-ex")

buttonC.addEventListener('click', (event) => {
    event.preventDefault()
    const inputNome = document.querySelector("#nomePasta-ex")
    const nomeEx = inputNome.value
    const template = document.querySelector('.template-ex')
    const exNovo = template.content.cloneNode(true)
    let h2 = exNovo.querySelector('h2')
    h2.textContent = nomeEx

    listaEx.appendChild(exNovo)
    inputNome.value = ''
    closeModal();
})

listaEx.addEventListener("input", function(event) {
    let alvoEvento = event.target;
    console.log('entrou')
    if (alvoEvento.id == 'obs') {
      let numLinhasQuebradas = alvoEvento.value.split('\n').length;
      alvoEvento.rows = numLinhasQuebradas;
    }
  });

  

  
  