arduino = document.getElementById("arduino")
nodemcu = document.getElementById("nodemcu")
guardar = document.getElementById("agregar")
arduino.addEventListener("click",function(){
    algo = ``
    algo +=`
    <li>
    <ul>Precios</ul>
    <ul>$3000</ul>
    </li>
    `
    guardar.innerHTML = algo
})
nodemcu.addEventListener("click",function(){
    algo = ``
    algo +=`
    <li>
    <ul>Precios</ul>
    </li>
    `
    guardar.innerHTML = algo

})