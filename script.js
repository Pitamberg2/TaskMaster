// fetch tasks from backend API
fetch('/tasks')
	.then(response => response.json())
	.then(tasks => {
		const taskList = document.getElementById('task-list');
		tasks.forEach(task => {
			const taskListItem = document.createElement('LI');
			taskListItem.textContent = `${task.name} - ${task.description}`;
			taskList.appendChild(taskListItem);
		});
	});

// handle form submission to create new tasks
document.getElementById('add-task-form').addEventListener('submit', (e) => {
	e.preventDefault();
	const taskName = document.getElementById('task-name').value;
	const taskDescription = document.getElementById('task-description').value;
	fetch('/tasks', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name: taskName, description: taskDescription })
	})
		.then(response => response.json())
		.then(task => {
			const taskList = document.getElementById('task-list');
			const taskListItem = document.createElement('LI');
			taskListItem.textContent = `${task.name} - ${task.description}`;
			taskList.appendChild(taskListItem);
		});
});
