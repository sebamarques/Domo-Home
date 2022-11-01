let project = document.getElementById("projectos")
let persiana = document.getElementById("persiana")
let dispensador = document.getElementById("dispensador")
let tacho = document.getElementById("tacho")
let cerradura = document.getElementById("cerradura")
let algo = ``

    persiana.addEventListener("click",function(){
        algo = `<p>Precio</p>
                <ul>
                <li>0</li>
                <li>1</li>
                <li>2</li>
                </ul>`
            
                project.innerHTML = algo
    })
    dispensador.addEventListener("click",function(){
        algo = `<p>Precio</p>
        <ul>
        <li>franci gei</li>
        <li>granco feo</li>
        <li>franco gei</li>
        </ul>`
    
        project.innerHTML = algo
    })
    cerradura.addEventListener("click",function(){
        algo = `<p>Precio</p>
        <ul>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        </ul>`
    
        project.innerHTML = algo
    })
    tacho.addEventListener("click",function(){
        algo = `<p>Precio</p>
        <ul>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        </ul>`
    
        project.innerHTML = algo
    })

