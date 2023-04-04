function login() {
  const section = document.createElement('section');
  section.className = 'containerSection';
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
  // Contenedor de inputs
  const containerInput = document.createElement('div');
  containerInput.className = 'containerInput';
  const textMail = document.createElement('h2');
  textMail.textContent = 'Correo';
  const inputMail = document.createElement('input');
  inputMail.className = 'input';
  const textPass = document.createElement('h2');
  textPass.textContent = 'Contraseña';
  const inputPass = document.createElement('input');
  inputPass.className = 'input';
  // Contenedor boton iniciar
  const containerBtnLogin = document.createElement('div');
  containerBtnLogin.className = 'containerBtnLogin';
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'button';
  buttonLogin.textContent = 'INICIAR';
  // Contenedor boton google
  const containerBtnGoogle = document.createElement('button');
  containerBtnGoogle.className = 'containerBtnGoogle';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.className = 'buttonGoogle';
  buttonGoogle.textContent = 'Continuar con Google';
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

  containerTitle.append(titleLogin);
  containerInput.append(textMail, inputMail, textPass, inputPass);
  containerBtnLogin.append(buttonLogin);
  buttonGoogle.append(imgGoogle);
  containerBtnGoogle.append(buttonGoogle);
  containerCreateAccount.append(textOr, createAccount);
  // eslint-disable-next-line max-len
  containerMainContent.append(containerTitle, containerInput, containerBtnLogin, containerBtnGoogle, containerCreateAccount);
  article.append(logoLogin);
  section.append(article, containerMainContent);
  return section;
}

export default login;
