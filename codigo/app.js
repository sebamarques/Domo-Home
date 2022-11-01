qr = document.getElementById("qr")
contenedor = document.getElementById("contenedor")
qr.addEventListener("click",function(){
    algo = ``
    algo +=`
    <p>Con este codigo QR son capaces de instalar nuestra aplicacion movil</p>
    <img src="img/qr.png">
    `
    contenedor.innerHTML = algo
})