import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/index.js';

function register(navigateTo) {
  const section = document.createElement('article');
  section.className = 'containerSection';
  // Contenedor logo inicio
  const article = document.createElement('article');
  article.className = 'containerLogoRegister';
  const logoRegister = document.createElement('img');
  logoRegister.className = 'logoRegister';
  logoRegister.src = './Img/logo-register.png';
  // Contenedor de titulo, imput y botones
  const containerMainContent = document.createElement('div');
  containerMainContent.className = 'containerMainContent';
  // Contenedor título
  const containerTitle = document.createElement('div');
  containerTitle.className = 'containerTitle';
  const titleRegister = document.createElement('h1');
  titleRegister.textContent = 'Registrar Cuenta';
  // Contenedor de inputs
  const containerInput = document.createElement('div');
  containerInput.className = 'containerInput';
  const textMail = document.createElement('h2');
  textMail.textContent = 'Correo';
  const inputMail = document.createElement('input');
  inputMail.className = 'input';
  inputMail.type = 'email';
  const textPass = document.createElement('h2');
  textPass.textContent = 'Contraseña';
  const inputPass = document.createElement('input');
  inputPass.className = 'input';
  inputPass.type = 'password';
  const textPassConfirm = document.createElement('h2');
  textPassConfirm.textContent = 'Confirmar contraseña';
  const inputPassConfirm = document.createElement('input');
  inputPassConfirm.className = 'input';
  inputPassConfirm.type = 'password';
  // Contenedor boton iniciar
  const containerBtnRegister = document.createElement('div');
  containerBtnRegister.className = 'containerBtnRegister';
  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'button';
  buttonRegister.textContent = 'REGISTRAR';

  // Contenedor parrafo error
  const containerError = document.createElement('div');
  containerError.className = 'containerError';
  const textError = document.createElement('p');
  textError.id = 'textError';
  textError.textContent = '';

  containerTitle.append(titleRegister);
  // eslint-disable-next-line max-len
  containerInput.append(textMail, inputMail, textPass, inputPass, textPassConfirm, inputPassConfirm);
  containerBtnRegister.append(buttonRegister);
  containerError.append(textError);
  containerMainContent.append(containerTitle, containerInput, containerError, containerBtnRegister);
  article.append(logoRegister);
  section.append(article, containerMainContent);

  buttonRegister.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('mail', inputMail.value);
    console.log('clave', inputPass.value);
    console.log('otra clave', inputPassConfirm.value);
    if (inputPassConfirm.value === inputPass.value) {
      try {
        // eslint-disable-next-line max-len
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          inputMail.value,
          inputPass.value,
        );
        console.log(userCredential);
        // aqui va la ruta para post
        navigateTo('/welcome');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          textError.innerHTML = 'El correo ingresado ya está en uso';
        } else if (error.code === 'auth/invalid-email') {
          textError.innerHTML = 'Correo no válido';
        } else if (error.code === 'auth/weak-password') {
          textError.innerHTML = 'La contraseña de be tener al menos 6 carácteres';
        } else if (error.code === 'auth/missing-password') {
          textError.innerHTML = 'Debe ingresar una contraseña';
        } else if (error.code === 'auth/missing-email') {
          textError.innerHTML = 'Debe ingresar un correo';
        } else if (error.code) {
          textError.innerHTML = 'Oops, algo salió mal';
          console.log('error', error.code);
          console.log('holiwi', error.message);
        }
      }
    } else if (inputPassConfirm.value === '') {
      textError.innerHTML = 'Debe confirmar la contraseña';
    } else if (inputPassConfirm.value !== inputPass.value) {
      textError.innerHTML = 'Las contraseñas deben coincidir';
    }
  });

  return section;
}

export default register;
