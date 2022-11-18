qr = document.getElementById("qr")
boton = document.getElementById("boton")

qr.addEventListener("click",function(){
    agrego =`
   <img src="media/qr.png">
    `
    boton.innerHTML = agrego
})