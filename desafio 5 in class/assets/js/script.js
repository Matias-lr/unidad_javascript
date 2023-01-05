array = []

const buttonAddTask = document.getElementById("add-task")
const inputTask = document.getElementById("input-task")
const tasks = document.getElementById("tasks")
const inputTotal = document.getElementById("total")
const inputRealizadas = document.getElementById("realizadas")

function updateState(){
    var tasksHTML = ""
    console.log(array.length)
    if(array.length === 0){
        tasks.innerHTML = ""
        return
    }
    array.forEach((task,index) => {
        tasksHTML += `
        <tr>
            <td>${index}</td>
            <td>${task.descripcion}</td>
            <td> <a class="btn btn-danger" onclick="eliminarTask(${index})">eliminar</a></td>
        </tr>
        `

        tasks.innerHTML = tasksHTML
        console.log(array)
    });
}

function eliminarTask(id){
    array.splice(id, 2)
    updateState()
}

function addTask(){
    message = inputTask.value
    array.push({
        descripcion:message,
        estado: false
    })
    updateState()
}

buttonAddTask.addEventListener('click',addTask)
