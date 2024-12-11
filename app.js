require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/auth', userRoutes); // Rutas para autenticación
app.use('/api/tasks', taskRoutes); // Rutas para tareas protegidas

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
