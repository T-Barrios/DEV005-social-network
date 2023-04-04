// Este es el punto de entrada de tu aplicacion
/*
import { myFunction } from './lib/index.js';
myFunction();
*/

import login from './Views/login';

//import register from "./Views/register";

const root = document.getElementById('root');
root.append(login());

// document.getElementById("root").innerHTML = register();