listaEx.addEventListener("click", function(event) {
    let alvoEvento = event.target;
    console.log(alvoEvento)
    if (alvoEvento.classList.contains == 'add-serie') {
      let numLinhasQuebradas = alvoEvento.value.split('\n').length;
      alvoEvento.rows = numLinhasQuebradas;
    }
  });
