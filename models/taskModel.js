const pool = require('../config/db');

const createTask = async (titulo, descripcion, prioridad, completada, fecha_vencimiento, userId) => {
    const result = await pool.query(
        `INSERT INTO tareas (titulo, descripcion, prioridad, completada, fecha_vencimiento, user_id)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [titulo, descripcion, prioridad, completada, fecha_vencimiento, userId]
    );
    return result.rows[0];
};

const getTasksByUser = async (userId) => {
    const result = await pool.query('SELECT * FROM tareas WHERE user_id = $1', [userId]);
    return result.rows;
};

const updateTask = async (id, fields) => {
    const setClause = Object.keys(fields)
        .map((key, i) => `${key} = $${i + 1}`)
        .join(', ');
    const values = [...Object.values(fields), id];

    const result = await pool.query(
        `UPDATE tareas SET ${setClause} WHERE id = $${values.length} RETURNING *`,
        values
    );
    return result.rows[0];
};

const deleteTask = async (id) => {
    const result = await pool.query('DELETE FROM tareas WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = { createTask, getTasksByUser, updateTask, deleteTask };
