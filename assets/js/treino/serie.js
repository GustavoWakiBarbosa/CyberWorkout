listaEx.addEventListener("click", function(event) {
    let alvoEvento = event.target;
    if (alvoEvento.id == 'add-serie') {
      paiDoAlvo = alvoEvento.parentNode
      listaSeries = paiDoAlvo.querySelector('.lista-series')
      const templateS = listaSeries.querySelector('.template-serie')
      const serieNova = templateS.content.cloneNode(true)
      listaSeries.appendChild(serieNova)
    }

    if(alvoEvento.classList.contains('check-ex')){
      if(alvoEvento.classList.contains('feito')){
        alvoEvento.classList.remove("feito")
      }else{
        alvoEvento.classList.add("feito")
      }
    }else if(alvoEvento.classList.contains("pontinhos")){
      let paiDoAlvo = alvoEvento.parentNode.parentNode
        paiDoAlvo.classList.add("fadeOut")
        setTimeout(function(){
          paiDoAlvo.remove()
        },500)
    }else if(alvoEvento.hasAttribute("contenteditable")){
      alvoEvento.textContent = ""
    }
  });
