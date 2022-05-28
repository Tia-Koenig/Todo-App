// When the + icon is clicked - we want this to render a new task template with input fields to fill in for the task
const createTaskButton = document.getElementById('create-task')
const editTask = document.getElementById('view-edit')
const deleteTask = document.getElementById('view-delete')
let taskStorage = [];

const storeTask = (ev) => {
    ev.preventDefault();
    let tasks = {
        id: Date.now(),
        title: document.getElementById('input-title').value,
        description: document.getElementById('input-description').value,
    }
    taskStorage.push(tasks)

    localStorage.setItem('TaskList', JSON.stringify(taskStorage));
    form.reset();
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('create-task').addEventListener('click', storeTask);
})



function create(){
    const userInputTitle = document.getElementById('input-title').value;
    const userInputDescription = document.getElementById('input-description').value;

    document.getElementById("render-title").innerHTML = userInputTitle;
    document.getElementById("render-description").innerHTML = userInputDescription;

    

    // console.log('CREATE a new task icon works, yay!');
    // let userInput = [{
    //     tasktitle: '',
    //     taskdescription: '',
    // }]
    // when the create task button is clicked, we want to populate a view task with the data that was entered
        // 
    
}

// After the new task template is rendered, we want the user to be able to submit the new fields they have filled in for the new task - submit button creates new task container

// I want to have all tasks render in a list

// if a task is clicked, i want that task to open and show me all details of the task and i want the task to close if the x in the left corner is clicked

// if a user clicks the edit icon in the top right, we want the task to show the fields as inputs with the current data in them but edit-able with a 'save changes' button that will replace the current data
function edit(){
    
    console.log('EDIT task works, yay!')
    // when the create task button is clicked, we want to populate a view task with the data that was entered
        // 
    
}
// shoul i use document.replaceChild(new, old) which replaces an element, to render the new edit-able task when the icon is clicked?

// if the user clicks the trash can icon, we want the task to be deleted and take the user back to the list of tasks
function remove(){
    
    console.log('DELETE task works, yay!')
    // when the create task button is clicked, we want to populate a view task with the data that was entered
        // 
    
}