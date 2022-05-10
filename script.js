const loginEmail = document.getElementById('email');
const loginSenha = document.getElementById('senha');
const check = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');

function login() {
  if (loginEmail.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
document.getElementById('entrar').addEventListener('click', login);

// Verificar se a checkbox do requisito 16 está selecionada
// referência https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/checkbox
// Habilitar o botão entrar
// referência https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
buttonEnviar.disabled = true;
function enableButton() {
  if (check.checked) {
    buttonEnviar.disabled = false;
  }
}
check.addEventListener('click', enableButton);

// função que conta o números de caracteres no textarea
// Referência - Contador de caracteres em uma textarea com JavaScript: https://www.youtube.com/watch?v=X-LVkU95jLU&ab_channel=dcode

function contaCaracteres() {
  const contador = document.getElementById('counter');
  const textArea = document.getElementById('textarea');
  contador.innerText = `${500 - textArea.value.length}`;
}
document.getElementById('textarea').addEventListener('input', contaCaracteres);
