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
    li.innerHTML = `<span>${taskText}</span>
    <i class="bi bi-trash3 delete-icon" onclick="deleteTask(this)"></i>
    `;

    li.classList.add('task-item');
    taskList.appendChild(li);

    // Hide card title and icon
    mainCard.style.display = 'none';

    taskInput.value = '';
}

function deleteTask(icon) {
    const taskItem = icon.parentElement;
    taskList.removeChild(taskItem);
}