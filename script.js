// Generar un número aleatorio entre 1 y 100
let targetNumber = Math.floor(Math.random() * 100) + 1;

// Contador de intentos
let attempts = 0;

function makeGuess() {
    // Obtener el valor ingresado por el usuario
    const userGuess = parseInt(document.getElementById('userGuess').value);

    // Validar si el valor es un número
    if (isNaN(userGuess)) {
        alert('Please enter a valid number.');
        return;
    }

    // Incrementar el contador de intentos
    attempts++;

    // Comparar el número ingresado con el número objetivo
    if (userGuess === targetNumber) {
        alert(`Congrats Bozo! You guessed the number in ${attempts} attempts.`);
        resetGame();
    } else {
        // Proporcionar una pista al usuario
        const message = userGuess < targetNumber ? 'Too low. Try Higher!' : 'Too high. Try Lower!';
        document.getElementById('message').innerText = message;
    }
}

function resetGame() {
    // Generar un nuevo número objetivo
    targetNumber = Math.floor(Math.random() * 100) + 1;
    
    // Reiniciar el contador de intentos
    attempts = 0;

    // Restablecer el mensaje
    document.getElementById('message').innerText = 'Enter a number and make a guess!';

    // Limpiar el campo de entrada
    document.getElementById('userGuess').value = '';
}
