const cambioColor= document.getElementById('botonPrincipal');
cambioColor.addEventListener("click",changeColor)


function changeColor(){
    let body=document.querySelector(".body")
    body.classList.toggle("change-mode-body")

    let etiquetaA=document.querySelectorAll("a")
    etiquetaA.forEach(element => {
        element.classList.toggle("change-mode-etiqueta-a")
    })
}

