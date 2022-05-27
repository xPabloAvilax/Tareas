import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deteleIcon from "./deleteIcon.js";
import  {displayTasks} from "./readTasks.js";

const input = document.querySelector("[data-form-input]");
const calendar = document.querySelector("[data-form-date]")

const addTask = (e)=>{
        e.preventDefault()
        const list = document.querySelector("[data-list]")
       
        const value = input.value;
        const date = calendar.value;
        const dateFormat = moment(date).format("DD/MM/YYYY");

        if(value === "" || date === ""){
                return;
        }
        input.value="";
        calendar.value="";
        const complete = false;

        const taskObjet = {
            value,
            dateFormat,
            complete,
            id: uuid.v4()
         }
        list.innerHTML="";

        const taskList= JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.push(taskObjet);
        localStorage.setItem("tasks",JSON.stringify(taskList));
        
        displayTasks();
   
}

export const createTask = ({value, dateFormat, complete, id})=>{   
        const task = document.createElement("li");
        const taskContent = document.createElement("div");
        const titleTask = document.createElement("span");
        const dateElement = document.createElement("span");

        titleTask.textContent=value;
        dateElement.textContent = dateFormat;
        task.classList.add("card");
        
        const check= checkComplete(id);
        if(complete){
                check.classList.toggle("fas");
                check.classList.toggle("completeIcon");
                check.classList.toggle("far");
        }

        titleTask.classList.add("task")
        taskContent.appendChild(check); 
        taskContent.appendChild(titleTask);

        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deteleIcon(id));

        return task;

}
export default addTask;