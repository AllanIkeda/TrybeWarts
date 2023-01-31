const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const btnEntrar = document.getElementById('btnEntrar');
const btnEnviar = document.getElementById('submit-btn');
const termos = document.getElementById('agreement');
// const textArea = document.getElementById('textarea');
// const cont = document.getElementById('counter');
const conter = document.getElementById('counter');
const areaTxt = document.getElementById('textarea');

const contador = () => {
  const caracteres = areaTxt.value.length;
  const decrementador = 500 - caracteres;

  conter.innerText = decrementador;
};
areaTxt.addEventListener('keyup', contador);

function validador() {
  if (inputEmail.value !== 'tryber@teste.com' && inputSenha.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btnEntrar.addEventListener('click', validador);

function aceite() {
  if (termos.checked) {
    btnEnviar.disabled = false;
    btnEnviar.style.opacity = '100%';
    btnEnviar.style.cursor = 'pointer';
  } else {
    btnEnviar.disabled = true;
    btnEnviar.style.opacity = '50%';
    btnEnviar.style.cursor = 'not-allowed';
  }
}
termos.addEventListener('click', aceite);

const formPreenchido = () => {
  const form = document.createElement('form');
  form.setAttribute('id', 'form-data');
  document.body.appendChild(form);
  return form;
};
formPreenchido();

const dados = () => {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const content = document.querySelector('#textarea').value;
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const arrayDados = [nome, sobrenome, email, house, family, content, rate];
  for (let i = 1; i < arrayDados.length; i += 1) {
    const pagina = document.querySelector('#form-data');
    const displays = document.createElement('div');
    displays.setAttribute('className', `display-${i}`);
    pagina.appendChild(displays);
  }
  return arrayDados;
};

const formFull = () => {
  const data = dados();
  const pagina = document.querySelectorAll('div');
  const materia = [];
  for (let i = 0; i < 6; i += 1) {
    if (document.querySelectorAll('.subject')[i].checked) {
      materia.push(document.querySelectorAll('.subject')[i].value);
    }
  }
  // const fullName = data[0] + data[1];
  pagina[2].innerText = `Nome: ${data[0]} ${data[1]}`;
  pagina[3].innerText = `Email: ${data[2]}`;
  pagina[4].innerText = `Casa: ${data[3]}`;
  pagina[5].innerText = `Família: ${data[4]}`;
  pagina[6].innerText = `Matérias: ${materia.toString().replaceAll(',', ', ')}`;
  pagina[7].innerText = `Observações: ${data[5]}`;
  pagina[8].innerText = `Avaliação: ${data[6]}`;
};

btnEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  const forms = document.querySelector('main');
  const pagina = document.getElementById('form-data');
  forms.style.display = 'none';
  pagina.style.display = 'flex';
  dados();
  formFull();
});
