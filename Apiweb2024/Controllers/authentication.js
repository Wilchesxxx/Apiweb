import { loginvalidation } from "../Controllers/global.js";

const loginin = document.getElementById("loginbtn");

async function validar() {
    const email = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Verificar si los campos están vacíos
    if (email.trim() === '' || pass.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return; // Salir de la función si algún campo está vacío
    }

    const verificar = loginvalidation(email, pass);
    const validation = await verificar;

    if (validation != null) {
        alert('Autenticación exitosa para: ' + email);
        window.location.href = '../Templates/home.html';
    } else {
        alert('Error: autenticación fallida.');
        console.log('Sesión ' + email + ' no validada.');
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    loginin.addEventListener('click', validar);
});