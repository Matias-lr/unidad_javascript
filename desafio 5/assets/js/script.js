var array = []

const buttonAddTask = document.getElementById("add-task")
const tasks = document.getElementById("tasks")
const inputTotal = document.getElementById("total")
const inputRealizadas = document.getElementById("realizadas")

function updateState(){
    var tasksHTML = ""
    array.forEach((val,index) => {
        tasksHTML += `
        <tr>
            <td>${index}</td>
            <td>${val.descripcion}</td>
            <td> <input type="checkbox" onclick="completarTask(${index})" ${val.estado ? "checked" : "hola"}> </td>
            <td> <a class="btn btn-danger" onclick="eliminarTask(${index})">eliminar</a></td>
        </tr>
        `
    })
    inputTotal.innerText = array.length
    inputRealizadas.innerText = array.filter(val => val.estado === true).length

    tasks.innerHTML = tasksHTML
    console.log(array)
}

function completarTask(id){
    array[id].estado = array[id].estado ? false : true
    updateState()
}

function eliminarTask(id){
    console.log(id)
    array.splice(id, 1)
    updateState()
}

function addTask() {
    message = document.getElementById("inputTask").value
    array.push({
        descripcion:message,
        estado: false
    })
    updateState()
}

buttonAddTask.addEventListener('click',addTask)