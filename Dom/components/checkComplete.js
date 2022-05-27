const checkComplete = (id) =>{
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click",(event)=>
        completeTask(event, id))
    return i;
}

const completeTask = (e,id) =>{
    const element = e.target;
    element.classList.toggle("fas");
    element.classList.toggle("compteleIcon");
    element.classList.toggle("far");
    console.log("checkid",id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index= tasks.findIndex(item => item.id ===id);
    console.log(index);
    tasks[index]["complete"] = !tasks[index]["complete"]
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
export default checkComplete;