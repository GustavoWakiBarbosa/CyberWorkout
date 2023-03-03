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
    }else if(alvoEvento.classList.contains("serie")){
      const modalTipo = document.querySelector('.modal-tipo')
      const containerT = document.querySelector('.modal-container-tipo')

      const openModalT = () => containerT.classList.add('modal-show')
      const closeModalT = () => containerT.classList.remove('modal-show')

      openModalT()
      
      const buttonCT = document.querySelector("#button-cancelar-serie")

      buttonCT.addEventListener('click', (event) =>{
        closeModalT()
      })

      containerT.addEventListener('click', (event) => {
        if (modal.contains(event.target)) return;
        
        closeModalT();
        })

        modalTipo.addEventListener("click", function(event) {
          console.log(alvoEvento)
          alvoTipo = event.target
          if(alvoTipo.classList.contains("warm-up")){
            alvoEvento.textContent = "W"
            alvoEvento.style.color = "#ffc124"
          }else if(alvoTipo.classList.contains("normal")){
            alvoEvento.textContent = "N"
            alvoEvento.style.color = "#FFFFFF"
          }else if(alvoTipo.classList.contains("failure")){
            alvoEvento.textContent = "F"
            alvoEvento.style.color = "#ff0808"
          }
        })
    }
  });
