export const uniqueDates = (tasks) =>{
    console.log(tasks);
    const unique = [];

    tasks.forEach( (task) =>{
        if(!unique.includes(task.dateFormat)){
            unique.push(task.dateFormat)
        }  
    })
    return unique;

}

export const orderDates = (dates) =>{
    return dates.sort((a,b) =>{
           const firstDate = moment(a,"DD/MM/YYYY");
           const secondDay = moment(b,"DD/MM/YYYY");
           return firstDate - secondDay;
        
    })
}