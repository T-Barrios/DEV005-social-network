import {
  addDoc, collection, doc, updateDoc, onSnapshot, query, arrayRemove, arrayUnion, deleteDoc,
} from 'firebase/firestore';
import { auth, db } from '../lib';
import { signOut } from '../lib/firebase-service';

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
  logoPost.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=imSefM4GPpE&ab_channel=Illumination');
    console.log('se hizo click');
  });
  const containerUserIcon = document.createElement('div');
  containerUserIcon.className = 'containerUserIcon';
  const userIcon = document.createElement('img');
  userIcon.src = './user-icon/icon-green-mushroom.png';
  userIcon.id = 'userIcon';
  userIcon.className = 'modalOpen';
  const iconOff = document.createElement('img');
  iconOff.src = './Img/icono_off.png';
  iconOff.id = 'iconOff';

  // Container menu
  const containerMenu = document.createElement('div');
  containerMenu.className = 'containerMenu';
  const btnNewPost = document.createElement('button');
  btnNewPost.textContent = '+';
  btnNewPost.id = 'btnNewPost';

  // modal. contenedor (div)
  const containerModal = document.createElement('div');
  containerModal.id = 'containerModal';
  containerModal.className = 'modal';
  // modal content div --> contiene: span (x que cierra) y texto de las opciones (logout)
  const divModal = document.createElement('div');
  divModal.className = 'modalContent';
  const spanCloseModal = document.createElement('span');
  spanCloseModal.innerHTML = '&times;';
  spanCloseModal.className = 'close';
  const btnLogOut = document.createElement('p');
  btnLogOut.textContent = 'Cerrar Sesión';
  btnLogOut.className = 'textModal';
  /* const btnMyWall = document.createElement('p');
  btnMyWall.textContent = ('Mis publicaciones');
  btnMyWall.className = 'textModal'; */

  // modal posteo
  // modal. contenedor (div)
  const containerModalPost = document.createElement('div');
  containerModalPost.id = 'containerModalPost';
  containerModalPost.className = 'modal';
  // modal content div --> contiene boton postear y el contenido
  const divModalPost = document.createElement('div');
  divModalPost.className = 'modalContentPost';
  const textPost = document.createElement('textarea');
  textPost.className = 'textPost';
  textPost.placeholder = '¿Hola, qué hace?';
  textPost.required = 'true';
  const divNoTextAlert = document.createElement('div');
  divNoTextAlert.className = 'divNoTextAlert';
  const noTextAlert = document.createElement('p');
  noTextAlert.textContent = 'Debe ingresar un texto';
  noTextAlert.id = 'noTextAlert';
  const btnPublish = document.createElement('button');
  btnPublish.textContent = 'Publicar';
  btnPublish.id = 'btnPublish';
  btnPublish.className = 'button';
  btnPublish.type = 'submit';

  // modal editar
  // modal. contenedor (div)
  const containerModalEdit = document.createElement('div');
  containerModalEdit.id = 'containerModalEdit';
  containerModalEdit.className = 'modal';
  // modal content div --> contiene boton editar/elimiar y el contenido
  const divModalEdit = document.createElement('div');
  divModalEdit.className = 'modalContentPost';
  const textEdit = document.createElement('textarea');
  textEdit.className = 'textPost';
  textEdit.textContent = '';
  const containerButtonEdit = document.createElement('div');
  containerButtonEdit.className = 'containerButtonEdit';
  const btnEdit = document.createElement('button');
  btnEdit.textContent = 'Guardar';
  btnEdit.id = 'btnEdit';
  btnEdit.className = 'button';
  btnEdit.type = 'submit';
  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'Eliminar';
  btnDelete.id = 'btnDelete';
  btnDelete.className = 'button';
  btnDelete.type = 'submit';

  // modal. contenedor confirmar delete (div)
  const containerDelete = document.createElement('div');
  containerDelete.id = 'containerDelete';
  containerDelete.className = 'modal';
  // modal content div --> contiene: span (x que cierra) y texto de las opciones (logout)
  const divDelete = document.createElement('div');
  divDelete.className = 'modalContent';
  const textConfirm = document.createElement('p');
  textConfirm.textContent = '¿Estás seguro?';
  textConfirm.id = 'textConfirm';
  const divButtonConfirm = document.createElement('div');
  divButtonConfirm.className = 'divButtonConfirm';
  const btnYes = document.createElement('button');
  btnYes.textContent = 'SI';
  btnYes.className = 'button';
  btnYes.id = 'btnYes';
  const btnNo = document.createElement('button');
  btnNo.textContent = 'NO';
  btnNo.className = 'button';

  divButtonConfirm.append(btnNo, btnYes);
  divDelete.append(textConfirm, divButtonConfirm);
  containerDelete.append(divDelete);

  containerButtonEdit.append(btnDelete, btnEdit);
  divModalEdit.append(textEdit, containerButtonEdit);
  containerModalEdit.append(divModalEdit);

  divNoTextAlert.append(noTextAlert);
  divModalPost.append(textPost, btnPublish, divNoTextAlert);
  containerModalPost.append(divModalPost);

  divModal.append(spanCloseModal, btnLogOut);
  containerModal.append(divModal);

  containerUserIcon.append(userIcon, containerModal);
  containerLogoPost.append(logoPost);

  containerHeader.append(containerLogoPost, containerUserIcon, iconOff);
  containerMenu.append(btnNewPost);
  // eslint-disable-next-line max-len
  section.append(containerHeader, containerMenu, containerModalPost, containerModalEdit, containerDelete);

  btnLogOut.addEventListener('click', async () => {
    await signOut(auth);
    console.log('user signed out');
  });

  // funciones click modal
  userIcon.onclick = function iconOpenModal() {
    containerModal.style.display = 'block';
    document.body.classList.add('modal-open');
  };

  spanCloseModal.onclick = function closeModal() {
    containerModal.style.display = 'none';
    document.body.classList.remove('modal-open');
  };

  window.addEventListener('click', (event) => {
    if (event.target === containerModal) {
      containerModal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });

  // funciones click modal post
  btnNewPost.onclick = function () {
    noTextAlert.style.display = 'none';
    containerModalPost.style.display = 'block';
    textPost.value = '';
    document.body.classList.add('modal-open');
  };
  window.addEventListener('click', (event) => {
    if (event.target === containerModalPost) {
      containerModalPost.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });

  // funcion scroll
  let prevScrollpos = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
    // Desplazándose hacia arriba
      btnNewPost.style.display = 'block';
    } else {
    // Desplazándose hacia abajo
      btnNewPost.style.display = 'none';
    }
    prevScrollpos = currentScrollPos;
  });

  // Abrir modal editar
  const editEvent = (buttonModalEdit, txtPost) => {
    buttonModalEdit.addEventListener('click', () => {
      console.log('abre modal');
      containerModalEdit.style.display = 'block';
      textEdit.textContent = txtPost.textContent;
      textEdit.dataset.id = txtPost.dataset.id;
      console.log('id de tuerca edit', textEdit.dataset.id);
    });

    // editar texto
    btnEdit.addEventListener('click', async () => {
      const editRef = doc(db, 'post', textEdit.dataset.id);
      await updateDoc(editRef, {
        content: textEdit.value,
      });
      containerModalEdit.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === containerModalEdit) {
        containerModalEdit.style.display = 'none';
      }
    });
  };

  // Eliminar post
  const deleteEvent = (txtPost) => {
    console.log('id Importante', txtPost.dataset.id);
    console.log('edit 2', textEdit.dataset.id);
    btnDelete.addEventListener('click', () => {
      containerDelete.style.display = 'block';
    });
    btnYes.addEventListener('click', async () => {
      await deleteDoc(doc(db, 'post', textEdit.dataset.id));
      containerModalEdit.style.display = 'none';
      containerDelete.style.display = 'none';
    });
    btnNo.addEventListener('click', () => {
      containerDelete.style.display = 'none';
    });
  };

  // Dar like
  const likeEvent = (likesIcon, chayanne) => {
    console.log('holiwiwiwiwiwiwiwi: ', chayanne);
    likesIcon.addEventListener('click', async (e) => {
      if (!chayanne.includes(auth.currentUser.email)) {
        // console.log('CHAYANNE: ', emailsList[0], auth.currentUser.email);
        const likeRef = doc(db, 'post', e.target.dataset.id);
        await updateDoc(likeRef, {
          like: arrayUnion(auth.currentUser.email),
        });
        console.log('likeEvent');
      } else {
        console.log('DISLIKE');
        const likeRef = doc(db, 'post', e.target.dataset.id);
        await updateDoc(likeRef, {
          like: arrayRemove(auth.currentUser.email),
        });
        console.log('dislikeEvent');
      }
    });
  };

  // Agregar post
  btnPublish.addEventListener('click', async () => {
    if (textPost.value === '') {
      noTextAlert.style.display = 'block';
      console.log('post vacio');
    } else {
      noTextAlert.style.display = 'none';

      const docRef = await addDoc(collection(db, 'post'), {
        author: auth.currentUser.email,
        content: textPost.value,
        like: [],
        date: Date.now(),
      });
      console.log('Document written with ID: ', docRef.id);
      console.log('texto', textPost.value);
      containerModalPost.style.display = 'none';
    }
  });

  /*  pedir OH
  if (textPost.value.length !== '') {
    noTextAlert.style.display = 'none';
  } */

  // Agregar listener para nuevos posts
  const getPosts = (callback) => {
    const queryPost = query(collection(db, 'post'));
    onSnapshot(queryPost, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((snap) => {
        console.log('snap data: ', snap.data());
        console.log('snap id: ', snap.id);
        posts.push({ document: snap.data(), idDocument: snap.id });
      });
      callback(posts);
    });
  };

  // Obtener todos los post
  async function getAllPosts() {
    getPosts((posts) => {
      section.querySelectorAll('.containerMain').forEach((e) => e.remove());
      posts.forEach((singlePost) => {
        // constantes de la data del callback de la función getPosts
        const docData = singlePost.document;
        const onlyID = singlePost.idDocument;
        console.log(singlePost);
        // Container main
        const containerMain = document.createElement('section');
        containerMain.className = 'containerMain';
        // Container header post
        const containerHeaderPost = document.createElement('div');
        containerHeaderPost.className = 'containerHeaderPost';
        const containerUserEmail = document.createElement('div');
        containerUserEmail.className = 'containerUserEmail';
        const userEmail = document.createElement('p');
        userEmail.textContent = docData.author.substring(0, docData.author.indexOf('@'));
        userEmail.className = 'userEmail';
        const containerUserIconPost = document.createElement('div');
        containerUserIconPost.className = 'containerUserIconPost';
        const userIconPost = document.createElement('img');
        userIconPost.src = './user-icon/icon-red-mushroom.png';
        userIconPost.id = 'userIconPost';

        // botón editar/eliminar
        const divButtonModalEdit = document.createElement('div');
        divButtonModalEdit.className = 'divButtonModalEdit';
        const buttonModalEdit = document.createElement('img');
        buttonModalEdit.className = 'buttonModalEdit';
        buttonModalEdit.src = './Img/btn-edit.png';
        buttonModalEdit.id = 'buttonModalEdit';
        // Container post
        const containerPost = document.createElement('div');
        containerPost.className = 'containerPost';
        const txtPost = document.createElement('p');
        txtPost.textContent = docData.content;
        txtPost.dataset.id = onlyID;
        // Container footer post
        const containerFooterPost = document.createElement('div');
        containerFooterPost.className = 'containerFooterPost';
        const containerNumberOfLikes = document.createElement('div');
        containerNumberOfLikes.className = 'containerNumberOfLikes';
        const numberOfLikes = document.createElement('p');
        numberOfLikes.textContent = docData.like.length;
        numberOfLikes.id = 'numberOfLikes';
        const containerLikesIcon = document.createElement('div');
        containerLikesIcon.className = 'containerLikesIcon';
        const likesIcon = document.createElement('img');
        likesIcon.src = './Img/icon-likes.png';
        likesIcon.id = 'likesIcon';

        likesIcon.dataset.id = onlyID;
        console.log('nose na', singlePost.data);

        // apendizaje de container main (post)
        if (auth.currentUser.email === docData.author) {
          console.log('funciona modal');
          divButtonModalEdit.append(buttonModalEdit);
          containerHeaderPost.append(divButtonModalEdit);
        } else {
          console.log('modal vale callampa');
        }
        containerUserIconPost.append(userIconPost);
        containerUserEmail.append(userEmail);
        containerFooterPost.append(containerNumberOfLikes, containerLikesIcon);
        containerNumberOfLikes.append(numberOfLikes);
        containerLikesIcon.append(likesIcon);
        containerHeaderPost.append(containerUserEmail, containerUserIconPost);
        containerPost.append(txtPost);
        containerMain.append(containerHeaderPost, containerPost, containerFooterPost);
        section.append(containerMain);
        console.log('usuario actual: ', auth.currentUser.email);
        console.log('lista de emails: ', docData.like);
        const chayanne = docData.like;

        likeEvent(likesIcon, chayanne);
        editEvent(buttonModalEdit, txtPost);
        deleteEvent(txtPost);
      });
    });
  }
  getAllPosts();

  document.body.style.backgroundColor = '#262523';
  return section;
}

export default post;
