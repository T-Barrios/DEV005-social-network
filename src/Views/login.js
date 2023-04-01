export const login = () => {
  return `
    <section class= 'containerLogin'> 

        <article class='containerLogoInicio'>
            <img class='logoInicio' src =./Img/logo-inicio.png></img>
        </article>

        <div class='containerMainContent'>

            <div class='containerTitle'>
                <h1 class='hInicio'>Iniciar Sesión</h1>
            </div>
            <div class='containerInput'>
                <h2>Correo</h2>
                <input class='input'></input>
                <h2>Contraseña</h2>
                <input class='input'></input>
            </div>
            <div class="containerBtnIniciar">
                <button class='button'>INICIAR</button>
            </div>
            <div class="containerBtnGoogle">
                <button class='buttonGoogle' type="button"> <img class='imgGoogle' src="./Img/logo-g-google.png" />Continuar con Google</button>
            </div>  
            <div class="containerRegistrar">  
                <h2>O</h2>
                <a href="./Views/register.js"><h2 class="registrar">Registrar cuenta</h2></a>
            </div>
        </div>
    </section>
    `
}