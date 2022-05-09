const loginEmail = document.getElementById('email');
const loginSenha = document.getElementById('senha');

function login() {
  if (loginEmail.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
document.getElementById('entrar').addEventListener('click', login);
