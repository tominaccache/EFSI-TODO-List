let tarea = document.getElementById("tarea");
let todoList = document.getElementById("todo-list");
let todos = [];

const inputsValidos = () => {
  return tarea.value.length;
} 

function agregarTODO(){
  if (!inputsValidos()) {
    alert("ingrese la tarea a realizar");
    return;
}

const nuevaTarea = {
  tarea: tarea.value,
  timestamp:new Date().toLocaleString(),
  completado: false,
  timestampTachado: null
};

todos.push(nuevaTarea);
parahacer();
tarea.value = "";
}

function parahacer() {
  todoList.innerHTML = ""; 

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
  
    li.textContent = todo.tarea;

    const botoneliminar = document.createElement("button");
    botoneliminar.textContent = "Eliminar";
    botoneliminar.addEventListener("click", () => eliminarTODO(index));
    li.appendChild(botoneliminar);

  
    li.addEventListener("click", () => {
      if (!todo.completado) {
        li.style.textDecoration = "line-through";
        todo.completado = true; 
        todo.timestampTachado = null;
      } else {
        li.style.textDecoration = "none";
        todo.completado = false; 
        
        todo.timestampTachado = new Date().toLocaleString();
      }
    });
    todoList.appendChild(li);
  });
  
}


function eliminarTODO(index) {
    todos.splice(index, 1);
    parahacer();
  }

function tareamasrapida() {
    if (todos.length === 0) {
      alert("No hay tareas ingresadas");
      return;
    }
  
    const tareasCompletadas = todos.filter(todo => todo.completado);
  
    if (tareasCompletadas.length === 0) {
      alert("No hay tareas completadas");
      return;
    }
  
    let tareaMasRapida = tareasCompletadas[0];
    tareasCompletadas.forEach(todo => {
      if (new Date(todo.timestamp) < new Date(tareaMasRapida.timestampTachado)) {
        tareaMasRapida = todo;
      }
    });
  
    alert(`La tarea más rápida fue: ${tareaMasRapida.tarea}`);
  }
  

//hacer el punto filter y q despues compare x tiempos