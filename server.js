const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true, useUnifiedTopology: true });

const taskSchema = new mongoose.Schema({
	name: String,
	description: String
});

const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', (req, res) => {
	Task.find().then(tasks => res.json(tasks));
});

app.post('/tasks', (req, res) => {
	const task = new Task(req.body);
	task.save().then(() => res.json(task));
});

app.put('/tasks/:id', (req, res) => {
	Task.findByIdAndUpdate(('link unavailable'), req.body, { new: true }).then(task => res.json(task));
});

app.delete('/tasks/:id', (req, res) => {
	Task.findByIdAndRemove(('link unavailable')).then(() => res.json({ message: 'Task deleted' }));
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});