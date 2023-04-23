import { signInWithEmailAndPassword, signInWithPopup } from '../lib/firebase-service';
// import { auth } from '../lib/index.js';

// import { onAuthStateChanged } from '../lib/firebase-service';

function login(navigateTo) {
  const section = document.createElement('section');
  section.className = 'containerSection';
  section.id = 'sectionLogin';

  // Contenedor logo inicio
  const article = document.createElement('article');
  article.className = 'containerLogoLogin';
  const logoLogin = document.createElement('img');
  logoLogin.className = 'logoLogin';
  logoLogin.src = './Img/logo-login.png';

  // Contenedor de titulo, input y botones
  const containerMainContent = document.createElement('div');
  containerMainContent.className = 'containerMainContent';

  // Contenedor título
  const containerTitle = document.createElement('div');
  containerTitle.className = 'containerTitle';
  const titleLogin = document.createElement('h1');
  titleLogin.textContent = 'Iniciar Sesión';
  titleLogin.id = 'title';

  // Contenedor de inputs
  const containerInput = document.createElement('div');
  containerInput.className = 'containerInput';
  const textMail = document.createElement('h2');
  textMail.textContent = 'Correo';
  const inputMail = document.createElement('input');
  inputMail.className = 'input';
  inputMail.id = 'txtEmail';
  inputMail.type = 'email';
  const textPass = document.createElement('h2');
  textPass.textContent = 'Contraseña';
  textPass.id = 'textPass';
  const inputPass = document.createElement('input');
  inputPass.className = 'input';

  inputPass.id = 'txtPassword';
  inputPass.type = 'password';

  // Contenedor parrafo error
  const containerError = document.createElement('div');
  containerError.className = 'containerError';
  const textError = document.createElement('p');
  textError.id = 'textError';
  textError.textContent = '';

  // Contenedor boton iniciar
  const containerBtnLogin = document.createElement('div');
  containerBtnLogin.className = 'containerBtnLogin';
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'button';
  buttonLogin.textContent = 'INICIAR';
  buttonLogin.id = 'btnLogin';
  buttonLogin.type = 'button';

  // Contenedor boton google
  const containerBtnGoogle = document.createElement('div');
  containerBtnGoogle.className = 'containerBtnGoogle';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.className = 'buttonGoogle';
  buttonGoogle.textContent = 'Continuar con Google';
  buttonGoogle.id = 'btnGoogle';
  buttonGoogle.type = 'button';
  const imgGoogle = document.createElement('img');
  imgGoogle.src = './Img/logo-g-google.png';
  imgGoogle.className = 'imgGoogle';

  // Container para crear cuenta
  const containerCreateAccount = document.createElement('div');
  containerCreateAccount.className = 'containerCreateAccount';
  const textOr = document.createElement('h2');
  textOr.textContent = 'O';
  const createAccount = document.createElement('h2');
  createAccount.textContent = 'Registrar cuenta';
  createAccount.className = 'createAccount';

  createAccount.addEventListener('click', () => {
    navigateTo('/register');
  });

  containerTitle.append(titleLogin);
  containerInput.append(textMail, inputMail, textPass, inputPass);
  containerBtnLogin.append(buttonLogin);
  buttonGoogle.append(imgGoogle);
  containerBtnGoogle.append(buttonGoogle);
  containerCreateAccount.append(textOr, createAccount);
  containerError.append(textError);
  // eslint-disable-next-line max-len

  containerMainContent.append(
    containerTitle,
    containerInput,
    containerError,
    containerBtnLogin,
    containerBtnGoogle,
    containerCreateAccount,
  );
  article.append(logoLogin);
  section.append(article, containerMainContent);

  /* validate() = onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('este es el USER: ', user);
      console.log('y este no sé (uid): ', uid);
      navigateTo('/post');
      // ...
    } else {
      console.log('sign out');
      // ...
    }
  }); */

  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log(inputMail.value, inputPass.value);

    try {
      // eslint-disable-next-line max-len
      const userCredential = await signInWithEmailAndPassword(
        inputMail.value,
        inputPass.value,
      );
      console.log(userCredential);

      // aqui va la ruta para post
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        textError.innerHTML = 'Usuario no encontrado';
      } else if (error.code === 'auth/wrong-password') {
        textError.innerHTML = 'Contraseña equivocada';
      } else if (error.code === 'auth/missing-password') {
        textError.innerHTML = 'Ingrese su contraseña';
      } else if (error.code === 'auth/invalid-email') {
        textError.innerHTML = 'Usuario no válido';
      } else if (error.code === 'auth/internal-error') {
        textError.innerHTML = 'Error interno, intentelo de nuevo';
      }
      console.log('error', error.code);
      console.log('holiwi', error.message);
    }
  });

  // Iniciar con google
  buttonGoogle.addEventListener('click', async () => {
    try {
      const credentials = await signInWithPopup();
      console.log('google', credentials);
    } catch (error) {
      console.log('google error', error);
    }
  });

  document.body.style.backgroundColor = '#DB0001';
  return section;
}
export default login;
