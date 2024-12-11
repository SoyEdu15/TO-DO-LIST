const { createTask, getTasksByUser, updateTask, deleteTask } = require('../models/taskModel');

const createTaskHandler = async (req, res) => {
    const { titulo, descripcion, prioridad, completada, fecha_vencimiento } = req.body;
    const userId = req.userId;

    try {
        const task = await createTask(titulo, descripcion, prioridad, completada, fecha_vencimiento, userId);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
};

const getTasksHandler = async (req, res) => {
    const userId = req.userId;

    try {
        const tasks = await getTasksByUser(userId);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener tareas' });
    }
};

const updateTaskHandler = async (req, res) => {
    const { id } = req.params;
    const fields = req.body;

    try {
        const task = await updateTask(id, fields);
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
};

const deleteTaskHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await deleteTask(id);
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
};

module.exports = { createTaskHandler, getTasksHandler, updateTaskHandler, deleteTaskHandler };
