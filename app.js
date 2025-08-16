// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const nombreInput = document.getElementById('nombreInput');
    const addBtn = document.getElementById('addBtn');
    const listaNombres = document.getElementById('listaNombres');
    const sortearBtn = document.getElementById('sortearBtn');
    const resultadoDiv = document.getElementById('resultado');
    
    // Array para almacenar los nombres
    const amigos = [];

    // Función para agregar un nombre a la lista
    const agregarNombre = () => {
        const nombre = nombreInput.value.trim();

        // Validar si el campo de texto está vacío
        if (nombre === '') {
            alert('Por favor, introduce un nombre válido.');
            return;
        }

        // Validar que solo tenga letras
        let soloTexto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

        //Revisar si el nombre contiene solo letras
        if (!soloTexto.test(nombre)) {
            alert('Por favor, introduce solo texto.');
            return;
        }

        // Validar que el nombre no esté repetido
        if (amigos.includes(nombre)) {
            alert('Este nombre ya está en la lista.');
            return;
        }

        // Agregar el nombre al array y a la lista en el DOM
        amigos.push(nombre);
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = nombre;
        listaNombres.appendChild(nuevoLi);

        // Limpiar el campo de texto después de agregar
        nombreInput.value = '';
        nombreInput.focus();
    };

    // Función para realizar el sorteo
    const sortearAmigo = () => {
        // Validar si hay suficientes nombres para sortear
        if (amigos.length < 3) {
            alert('Debes agregar al menos tres nombres para realizar el sorteo.');
            return; 
        }

        // Generar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];

        // Mostrar el resultado en la pantalla
        resultadoDiv.textContent = `¡El amigo secreto es: ${amigoSecreto}! 🎉`;
                
        // Limpiar la lista de nombres
        listaNombres.innerHTML = '';
        amigos.length = 0;
    };

    // Eventos de los botones
    addBtn.addEventListener('click', agregarNombre);
    sortearBtn.addEventListener('click', sortearAmigo);

    // Permitir agregar nombres presionando la tecla Enter
    nombreInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarNombre();
        }
    });
});


