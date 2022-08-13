const loginBtn = document.getElementById('botao-login');
const contadorCaracteres = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const checkboxAgreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const materias = document.getElementsByClassName('subject');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const formData = document.getElementById('form-data');
const evaluationForm = document.getElementById('evaluation-form');
const nomeForms = document.getElementById('nome');
const emailForms = document.getElementById('email');
const houseForms = document.getElementById('casa');
const materiasForms = document.getElementById('materias');
const familiaForms = document.getElementById('familia');
const avaliacaoForms = document.getElementById('avaliacao');
const observacoesForms = document.getElementById('observacoes');

function verificaLogin() {
  const inputEmail = document.getElementsByName('email')[0];
  const inputSenha = document.getElementsByName('password')[0];
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    return alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}
loginBtn.addEventListener('click', verificaLogin);

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

function atualizaContador() {
  const novoContador = 500 - textArea.value.length;
  contadorCaracteres.innerHTML = novoContador.toString();
}

textArea.addEventListener('input', atualizaContador);

function checkaSubmit() {
  if (checkboxAgreement.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
}

function pegaMaterias() {
  const listaMaterias = [];
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      listaMaterias.push(materias[i].value);
    }
  }
  const materiasString = listaMaterias.join(', ');
  return (materiasString);
}

function pegaFamilia() {
  const familia = document.querySelector('input[name="family"]:checked').value;
  return familia;
}
function pegaNota() {
  const nota = document.querySelector('div input[name="rate"]:checked').value;
  return nota;
}
function pegObservacoes() {
  return textArea.value;
}
checkboxAgreement.addEventListener('input', checkaSubmit);
checkaSubmit();

function submit(event) {
  event.preventDefault();
  nomeForms.innerHTML = `Nome: ${nome.value} ${sobrenome.value}`;
  emailForms.innerHTML = `Email: ${email.value}`;
  houseForms.innerHTML = `Casa: ${house.value}`;
  familiaForms.innerHTML = `Família: ${pegaFamilia()}`;
  materiasForms.innerHTML = `Matérias: ${pegaMaterias()}`;
  avaliacaoForms.innerHTML = `Avaliação: ${pegaNota()}`;
  observacoesForms.innerHTML = `Observações: ${pegObservacoes()}`;
  formData.style.display = 'flex';
  evaluationForm.style.display = 'none';
}

submitBtn.addEventListener('click', submit);
