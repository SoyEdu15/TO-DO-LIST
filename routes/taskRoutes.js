const express = require('express');
const { createTaskHandler, getTasksHandler, updateTaskHandler, deleteTaskHandler } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTaskHandler);
router.get('/', authMiddleware, getTasksHandler);
router.put('/:id', authMiddleware, updateTaskHandler);
router.delete('/:id', authMiddleware, deleteTaskHandler);

module.exports = router;
