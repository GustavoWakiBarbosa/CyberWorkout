const timer = document.querySelector('.timer')
const skip = document.querySelector('#skip')
let Contador;
tempo = timer.querySelector('#tempo');

skip.addEventListener("click", () => {
    clearInterval(Contador);
    timer.style.display = "none"
    tempo.textContent = '0:00'
})

listaEx.addEventListener("click", function(event) {
var alvoEvento = event.target
  
if (alvoEvento.id == 'add-serie') {
  paiDoAlvo = alvoEvento.parentNode
  listaSeries = paiDoAlvo.querySelector('.lista-series')
  const templateS = listaSeries.querySelector('.template-serie')
  const serieNova = templateS.content.cloneNode(true)
  listaSeries.appendChild(serieNova)
}

if(alvoEvento.classList.contains('check-ex')){
let count = parseInt(alvoEvento.closest(".exercicio").querySelector("#descanso").value) + 1
  if(count > 1){
    timer.style.display = "Flex"
    Contador = setInterval(function() {
      count--;
      let minutes = Math.floor(count / 60);
      let seconds = count % 60;
      if(tempo.textContent )
      tempo.textContent = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
      if (count == 0) {
          clearInterval(Contador);
          timer.style.display = "none"
      }
    }, 1000);
  }
  
  if(alvoEvento.classList.contains('feito')){
    alvoEvento.classList.remove("feito")
  }else{
    alvoEvento.classList.add("feito")
  }
}else if(alvoEvento.classList.contains("pontinhos")){
  let paiDoAlvo = alvoEvento.parentNode.parentNode
    paiDoAlvo.classList.add("fadeOut")
    paiDoAlvo.remove()
    // setTimeout(function(){
    //   paiDoAlvo.remove()
    // },500)
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

  modalTipo.addEventListener("click", function(event2) {
    alvoTipo = event2.target
    if(alvoTipo.classList.contains("warm-up")){
      alvoEvento.textContent = "W"
      alvoEvento.style.color = "#ffc124"
    }else if(alvoTipo.classList.contains("normal")){
      alvoEvento.textContent = "N"
      alvoEvento.style.color = "#FFFFFF"
    }else if(alvoTipo.classList.contains("failure")){
      alvoEvento.textContent = "F"
      alvoEvento.style.color = "#ff0808"
    }else if(alvoTipo.classList.contains("drop")){
      alvoEvento.textContent = "D"
      alvoEvento.style.color = "#0095ff"
    }
    alvoEvento = null
  })
}
});
