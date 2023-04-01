export const register = () => {
    return `
      <section class= 'containerRegister'> 
  
          <article class='containerLogoRegister'>
              <img class='logoRegister' src =./Img/logo-registro.png></img>
          </article>
  
          <div class='containerMainContent'>
  
              <div class='containerTitle'>
                  <h1 class='hRegister'>Registrar cuenta</h1>
              </div>
              <div class='containerInput'>
                  <h2>Correo</h2>
                  <input class='input'></input>
                  <h2>Contraseña</h2>
                  <input class='input'></input>
                  <h2>Confirmar contraseña</h2>
                  <input class='input'></input>
              </div>
              <div class="containerBtnRegistrar">
                  <button class='button'>Registrar</button>
              </div>
          </div>
      </section>
      `
}