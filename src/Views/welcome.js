function welcome(navigateTo) {
  const section = document.createElement('article');
  section.className = 'containerSection';
  // Contenedor logo inicio
  const article = document.createElement('article');
  article.className = 'containerLogoRegister';
  const logoRegister = document.createElement('img');
  logoRegister.className = 'logoRegister';
  logoRegister.src = './Img/logo-register.png';
  // Contenedor de parrafo
  const containerWelcome = document.createElement('div');
  containerWelcome.className = 'containerWelcome';
  const textWelcome = document.createElement('h1');
  textWelcome.textContent = 'Su cuenta ha sido creada con éxito';
  textWelcome.id = 'txtWelcome';
  // Contenedor boton iniciar Secion
  const containerBtnEnter = document.createElement('div');
  containerBtnEnter.className = 'containerBtnEnter';
  const buttonEnter = document.createElement('button');
  buttonEnter.className = 'button';
  buttonEnter.textContent = 'IR A INICIO';
  // Contenedor imagen
  const containerImgWelcome = document.createElement('div');
  containerImgWelcome.className = 'containarImgWelcome';
  const imgWelcome = document.createElement('img');
  imgWelcome.src = './Img/img-welcome-view.png';
  imgWelcome.id = 'imgWelcome';

  containerImgWelcome.append(imgWelcome);
  containerWelcome.append(textWelcome);
  containerBtnEnter.append(buttonEnter);
  article.append(logoRegister);
  section.append(article, containerWelcome, containerBtnEnter, containerImgWelcome);

  buttonEnter.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/');
  });

  document.body.style.backgroundColor = '#DB0001';
  return section;
}

export default welcome;
