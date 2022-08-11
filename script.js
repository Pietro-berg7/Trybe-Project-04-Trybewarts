const botaoLogin = document.getElementById('botao-login');
const inputEmail = document.getElementsByName('email')[0];
const inputSenha = document.getElementsByName('senha')[0];

botaoLogin.addEventListener('click', verificaLogin);

function verificaLogin() {
    if (inputEmail.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
        alert('Email ou senha inválidos.');
    } else {        
        alert('Olá, Tryber!');
    }
}