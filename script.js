const botaoLogin = document.getElementById('botao-login');
const inputEmail = document.getElementsByName('email')[0];
const inputSenha = document.getElementsByName('password')[0];

function verificaLogin() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    return alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}
botaoLogin.addEventListener('click', verificaLogin);

function criaCheckbox() {
  const check = document.getElementById('check');
  const array = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  const div = document.createElement('div');
  check.appendChild(div);
  for (let i = 0; i < 6; i += 1) {
    const criaDiv = document.createElement('div');
    const criaCheck = document.createElement('input');
    const criaLabel = document.createElement('label');
    criaCheck.id = array[i];
    criaCheck.type = 'checkbox';
    criaCheck.className = 'subject';
    criaCheck.value = array[i];
    criaLabel.setAttribute('for', array[i]);
    criaLabel.innerHTML = array[i];
    div.appendChild(criaDiv);
    criaDiv.appendChild(criaCheck);
    criaDiv.appendChild(criaLabel);
  }
}
criaCheckbox();

function criaNotas() {
  const check = document.getElementById('nota');
  const div = document.createElement('div');
  check.appendChild(div);
  for (let i = 1; i <= 10; i += 1) {
    const criaDiv = document.createElement('div');
    const criaCheck = document.createElement('input');
    const criaLabel = document.createElement('label');
    criaCheck.id = i;
    criaCheck.type = 'radio';
    criaCheck.value = i;
    criaCheck.setAttribute('name', 'rate');
    criaLabel.setAttribute('for', i);
    criaLabel.innerHTML = i;
    div.appendChild(criaDiv);
    criaDiv.appendChild(criaCheck);
    criaDiv.appendChild(criaLabel);
  }
}
criaNotas();