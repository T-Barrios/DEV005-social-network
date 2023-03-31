export const login = () => {
  const logoContainer = document.createElement("div")
  return `
    <section class= 'containerLogin'> 

        <article class='containerLogoInicio'>
            <img class='logoInicio' src =./Img/logo-inicio.png></img>
        </article>

        <div class='containerMainConent'>

            <div class='containerInput'>
                <h1 class='hInicio'>Iniciar Sesión</h1>
                <div class="inputLabel"><h2>Correo</h2></div>
                <input class='input'></input>
                <div class="inputLabel"><h2>Contraseña</h2></div>
                <input class='input'></input>
            </div>

            <div class='containerButtonInicio'>
                <button class='button'>INICIAR</button>
                <button class='buttonGoogle' type="button"> <img class='imgGoogle' src="./Img/logo-g-google.png" />Continuar con Google</button>
                <h2>O</h2>
                <h2>Registrar cuenta</h2>
            </div>

        </div>
    </section>
    `
}