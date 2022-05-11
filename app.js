let tareas = JSON.parse(localStorage.getItem("lista")) || []
let contador = document.getElementById("contador")
let contenedorTarjetas = document.getElementById("contenedor")



//Guardar en localStorage

// localStorage.setItem("lista", JSON.stringify(tareas))

// let pruebita = JSON.parse(localStorage.getItem("lista"))



const handleSubmit=function(e){

    e.preventDefault()
    let tarea = document.getElementById("text-tareas") //igualo la variable tarea a la tarea q ingreso
    tareas.push(tarea.value) //esa tarea ingresada la meto en el array tareas
    localStorage.setItem("lista", JSON.stringify(tarea)) //ese array lo transformo y guardo en localStorage
    tarea.value = "" //al input lo igual a un string vacio para deajr en blanco
    tarea.focus() //el puntero va ahi

    agregarTarjeta() //
}


function agregarTarjeta(){

    contenedorTarjetas.innerHTML = ""

    tareas.forEach(function(tarea, index){
        
        let tarjeta = document.createElement("div") 
        tarjeta.classList = "card mb-2"

        let contenidoTarjeta = `<div class="card">
        <div class="card-body d-flex justify-content-between align-items-center"><br>
                <span>${tarea}</span>
                <button class="btn btn-danger btn-sm" id="btnBorrar" onclick=borrarTarea(${index})>X</button>
        </div>
    </div>`
        tarjeta.innerHTML = contenidoTarjeta

        contenedorTarjetas.appendChild(tarjeta)
    })
    //cambia el contador de tareas. Igualo al contador al largo de las tareas
    contador.innerText = tareas.length
}


function borrarTarea(index){

    tareas.splice(index, 1)
    localStorage.setItem("lista", JSON.stringify(tareas))
    agregarTarjeta()
}

document.getElementById("form").addEventListener("submit", handleSubmit)

agregarTarjeta()