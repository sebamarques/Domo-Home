let project = document.getElementById("projectos")
let persiana = document.getElementById("persiana")
let dispensador = document.getElementById("dispensador")
let tacho = document.getElementById("tacho")
let cerradura = document.getElementById("cerradura")
function mostrar(){
    algo = ``
    algo += `
    <p>hola</p>
    `
    project.innerHTML = algo
}
document.addEventListener("DOMContentLoaded",function(){
    persiana.addEventListener("click",function(){
        alert("persiana")
    })
    dispensador.addEventListener("click",function(){
        alert("Dispensador")
    })
    cerradura.addEventListener("click",function(){
        alert("cerradura")
    })
    tacho.addEventListener("click",function(){
        alert("tacho")
    })

})