import { displayTasks } from "./readTasks.js";

const deteleIcon= (id) =>{
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas","fa-trash-alt","trashIcon","icon")
    deleteIcon.addEventListener("click",()=> deleteTask(id));
    return deleteIcon;
}
const deleteTask = (id) =>{
    const li = document.querySelector("[data-list]")
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex((item)=> item.id === id);
    tasks.splice(index,1);
    li.innerHTML ="";
    localStorage.setItem("tasks",JSON.stringify(tasks));
    displayTasks();
}
export default deteleIcon;