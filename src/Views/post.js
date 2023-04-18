function post() {
  const section = document.createElement('article');
  section.className = 'containerSection';
  // Contenedor header post
  const containerHeader = document.createElement('section');
  containerHeader.className = 'containerHeader';
  const containerLogoPost = document.createElement('div');
  containerLogoPost.className = 'containerLogoPost';
  const logoPost = document.createElement('img');
  logoPost.className = 'logoPost';
  logoPost.src = './Img/logo-post.png';
  const containerUserIcon = document.createElement('div');
  containerUserIcon.class = 'containerUserIcon';
  const userIcon = document.createElement('img');
  userIcon.src = './user icon/icon-green-mushroom.png';
  userIcon.id = 'userIcon';
  // Container main
  const containerMain = document.createElement('section');
  containerMain.className = 'containerMain';
  // Container header post
  const containerHeaderPost = document.createElement('div');
  containerHeaderPost.className = 'containerHeaderPost';
  const containerUserEmail = document.createElement('div');
  containerUserEmail.className = 'containerUserMail';
  const userEmail = document.createElement('p');
  userEmail.textContent = 'Mario';
  const containerUserIconPost = document.createElement('div');
  containerUserIconPost.className = 'containerUserIconPost';
  const userIconPost = document.createElement('img');
  userIconPost.src = './user icon/icon-red-mushroom.png';
  userIconPost.id = 'userIconPost';
  // Container post
  const containerPost = document.createElement('div');
  containerPost.className = 'containerPost';
  const txtPost = document.createElement('p');
  txtPost.textContent = 'Chayanne es bacán.';
  // Container footer post
  const containerFooterPost = document.createElement('div');
  containerFooterPost.className = 'containerFooterPost';
  const containerNumberOfLikes = document.createElement('div');
  containerNumberOfLikes.classList = 'containerUserEmail';
  const numberOfLikes = document.createElement('p');
  numberOfLikes.textContent = '2';
  const containerLikesIcon = document.createElement('div');
  containerLikesIcon.className = 'containerLikesIcon';
  const likesIcon = document.createElement('img');
  likesIcon.src = './Img/icon-likes.png';
  likesIcon.id = 'likesIcon';
  // Container menu
  const containerMenu = document.createElement('div');
  containerMenu.className = 'containerMenu';
  const containerBtnNewPost = document.createElement('div');
  containerBtnNewPost.className = 'containerBtnNewPost';
  const btnNewPost = document.createElement('button');
  btnNewPost.textContent = '+';
  btnNewPost.id = 'btnNewPost';

  containerLogoPost.append(logoPost);
  containerUserIcon.append(userIcon);
  containerUserEmail.append(userEmail);
  containerUserIcon.append(userIcon);
  containerFooterPost.append(containerNumberOfLikes, containerLikesIcon);
  containerNumberOfLikes.append(numberOfLikes);
  containerLikesIcon.append(likesIcon);
  containerHeaderPost.append(containerUserEmail, containerUserIcon);
  containerPost.append(txtPost);
  containerBtnNewPost.append(btnNewPost);

  containerHeader.append(containerLogoPost, containerUserIcon);
  containerMain.append(containerHeaderPost, containerPost, containerFooterPost);
  containerMenu.append(containerBtnNewPost);
  section.append(containerHeader, containerMain, containerMenu);

  document.body.style.backgroundColor = '#262523';

  return section;
}

export default post;
