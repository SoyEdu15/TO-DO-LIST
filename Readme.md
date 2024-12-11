
# Backend-TO-DO-LIST

**API To do list** es una aplicación basada en Node.js que implementa autenticación y autorización utilizando JSON Web Tokens (JWT). Este proyecto es la parte del servidor(back-end) y se unira con una proxima aplicacion para el cliente qeu esta ciendo desarrollada en React usando TypeScript.

## 🚀 Características

- Autenticación con JWT.
- Registro de usuarios.
- Endpoints protegidos con middleware de autorización.
- Implementación simple y escalable.
- CRUD de tareas.
- Implementacion de React (en dearrollo).

## 🛠️ Tecnologías Utilizadas

- **Node.js**
- **Express** (para el servidor)
- **Postgres** (para la base de datos)
- **JSON Web Token (JWT)**
- **bcrypt** (para hashear contraseñas)
- **React** (proximamente)

## 📦 Instalación

Sigue estos pasos para clonar y configurar el proyecto:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/SoyEdu15/TO-DO-LIST.git
   cd TO-DO-LIST
   ```

2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   DATABASE_URL = "postgresql://DB_USER:DB_PASSWORD@localhost:DB_PORT/DB_NAME"
   PORT=3000
   JWT_SECRET=tu_clave_secreta
   ```

4. Inicia el servidor:
   ```bash
   npm start
   ```

## 📋 Documentación de la API

## 📖 Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** (versión 14 o superior)
- **npm** (administrador de paquetes de Node.js)

## 🤝 Contribuciones

¡Contribuciones son bienvenidas! Si encuentras algún problema, crea un _issue_ o envía un _pull request_.
<div align="center">
    
  # Authors

  - [@Eduard Murillo](https://github.com/SoyEdu15)
  </div>
## 📜 Licencia

Este proyecto está bajo la Licencia MIT.
