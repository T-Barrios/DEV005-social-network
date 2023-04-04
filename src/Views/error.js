function error() {
  const containerError = document.createElement('div');
  containerError.className = 'containerError';
  const imgError = document.createElement('img');
  imgError.src = './Img/error-404.png';
  imgError.className = 'imgError';
  const body = document.getElementById('body');
  body.style.backgroundColor = '#1a45ad';

  containerError.append(imgError);
  return containerError;
}

export default error;
