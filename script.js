// When the + icon is clicked - we want this to render a new task template with input fields to fill in for the task
const createTaskButton = document.getElementById('create-task');
let taskStorage = [];
const editTaskIcon = document.getElementById('edit-icon');
const deleteTaskIcon = document.getElementById('delete-icon');


const createTask = (ev) => {
    const createForm = document.getElementById("create-task-form");
    ev.preventDefault();
    const title = ev.target[0].value;
    const description = ev.target[1].value;
    let task = {
        id: Date.now(),
        title,
        description,
    };
    addTaskToDom(task);
    taskStorage.push(task);
    createForm.reset();
    console.log(taskStorage);
}

const addTaskToDom = (task) => {
    const {title, description, id} = task;
    const allTasksContainer = document.getElementById('all-tasks');
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('id', id)
    const taskId = document.createElement('small').innerHTML = id;
    const taskTitle = document.createElement('h1').innerHTML = title;
    const taskDescription = document.createElement('p').innerHTML = description;
    const deleteIcon = document.createElement('button');
    deleteIcon.addEventListener('click', () => {
        deleteTask(id);
    });
    deleteIcon.innerHTML = '<i class="fa-solid fa-trash-can id="delete-icon"></i>';
    const editIcon = document.createElement('button');
    editIcon.addEventListener('click', () => {
        // document.getElementById("edit-task-form").style.display = "block";

    });
    editIcon.innerHTML = '<i class="fa-solid fa-pen-to-square" id="edit-icon"></i>';
    taskContainer.append(taskId, taskTitle, taskDescription, deleteIcon, editIcon);
    allTasksContainer.append(taskContainer);
}

const deleteTask = (id) => {
    document.getElementById(id).remove();
}

const editTask = (ev) => {
    // need to access the task id so that i can replace the title and description with the new data being passed in from the edit form
    // the problem is im calling the editTask function on submit of the edit form which doesnt have access to the task id

    // possibly add unique identifier and access it that way
    // when i add the event listener to edit icon
    const editForm = document.getElementById("edit-task-form");
    ev.preventDefault();
    const title = ev.target[0].value;
    const description = ev.target[1].value;
    console.log(title, description)
    // i want to change the innerHTML to the new input of title and description

    // i want to have the current input value as the pre-filled data
    editForm.reset()
    // need to set display none when 'save changes' button is clicked 
}


// onclick="remove()"

// function delete(){
//     console.log('DELETE task works, yay!');
//     // document.getElementById('')
// }


// when the create task button is clicked, we want to populate a view task with the data that was entered

// After the new task template is rendered, we want the user to be able to submit the new fields they have filled in for the new task - submit button creates new task container

// I want to have all tasks render in a list

// if a task is clicked, i want that task to open and show me all details of the task and i want the task to close if the x in the left corner is clicked

// if a user clicks the edit icon in the top right, we want the task to show the fields as inputs with the current data in them but edit-able with a 'save changes' button that will replace the current data
// shoul i use document.replaceChild(new, old) which replaces an element, to render the new edit-able task when the icon is clicked?

// if the user clicks the trash can icon, we want the task to be deleted and take the user back to the list of tasks
