const pool = require('../config/db');

const createUser = async (nombre, email, password) => {
    const result = await pool.query(
        'INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3) RETURNING id',
        [nombre, email, password]
    );
    return result.rows[0];
};

const getUserByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    return result.rows[0];
};

module.exports = { createUser, getUserByEmail };
