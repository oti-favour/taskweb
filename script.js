const mainCard = document.getElementById('mainCard');
const homeIcon = document.getElementById('homeIcon');
const cardTitle = document.getElementById('cardTitle');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    
    li.innerHTML = `
    <input type="checkbox" class="me-5" onchange="completeTask(this)">
    <span class="me-3">${taskText}</span>
    <i class="bi bi-trash3 delete-icon ml-5" onclick="deleteTask(this)"></i>
    `;

    li.classList.add('task-item');
    taskList.appendChild(li);

  
    mainCard.style.display = 'none';
    document.getElementById('todoListContainer').style.display = 'block';

    taskInput.value = '';
}

function completeTask(checkbox) {
    const taskItem = checkbox.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(icon) {
    const taskItem = icon.parentElement;
    taskList.removeChild(taskItem);

    if (taskList.children.length === 0) {
        mainCard.style.display = 'block';
        document.getElementById('todoListContainer').style.display = 'none';
    }
}