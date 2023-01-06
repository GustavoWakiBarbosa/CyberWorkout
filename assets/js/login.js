const professor = document.querySelector("#email")
const areaLogin = document.querySelector(".area-login")

if(professor.checked){
    areaLogin.style.cssText =
    "display: none;"+
    "flex-direction: column;"+
    "justify-content: center;"+
    "align-items: center;"+
    "gap: 10px;"
}