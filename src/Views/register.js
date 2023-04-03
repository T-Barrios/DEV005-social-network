function register() {
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
  const textPass = document.createElement('h2');
  textPass.textContent = 'Contraseña';
  const inputPass = document.createElement('input');
  inputPass.className = 'input';
  const textPassConfirm = document.createElement('h2');
  textPassConfirm.textContent = 'Confirmar contraseña';
  const inputPassConfirm = document.createElement('input');
  inputPassConfirm.className = 'input';
  // Contenedor boton iniciar
  const containerBtnRegister = document.createElement('div');
  containerBtnRegister.className = 'containerBtnRegister';
  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'button';
  buttonRegister.textContent = 'REGISTRAR';

  containerTitle.append(titleRegister);
  // eslint-disable-next-line max-len
  containerInput.append(textMail, inputMail, textPass, inputPass, textPassConfirm, inputPassConfirm);
  containerBtnRegister.append(buttonRegister);
  containerMainContent.append(containerTitle, containerInput, containerBtnRegister);
  article.append(logoRegister);
  section.append(article, containerMainContent);
  return section;

/*
  article.append(logoRegister);
  section.append(article);
  return section;
*/
}

export default register;