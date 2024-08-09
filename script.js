// script.js

document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('message-box').style.display = 'none';
    document.getElementById('form-box').style.display = 'block';
});

document.getElementById('beauty-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    const firstName = document.getElementById('first-name').value.trim();
    const beautyLevel = document.getElementById('beauty-level').value;
    const errorMessage = document.getElementById('error-message');

    // Verificar se o nome é "Mariana" ou "Mari"
    if (firstName !== 'Mariana' && firstName !== 'Mari') {
        errorMessage.textContent = 'Você não é a Mari, sai daqui.';
        return; // Interrompe a execução se o nome não for válido
    }

    // Verificar o nível de beleza
    if (beautyLevel < 10) {
        errorMessage.textContent = 'Você realmente acha que está abaixo de 10?';
    } else if (beautyLevel == 10) {
        errorMessage.textContent = 'Ainda está errado... sua beleza é INFINITA!';
    }

    // Se o nível de beleza for 10, mostrar a surpresa após um breve delay
    if (beautyLevel == 10) {
        setTimeout(function() {
            document.getElementById('form-box').style.display = 'none';
            document.getElementById('surprise-box').style.display = 'block';
            document.getElementById('love-song').play();
        }, 2000); // Mostra a mensagem de erro por 2 segundos
    }
});
