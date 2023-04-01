// Este es el punto de entrada de tu aplicacion
/*
import { myFunction } from './lib/index.js';

myFunction();
*/

import { login } from "./Views/login";
import { register } from "./Views/register";

document.getElementById("root").innerHTML = login();
document.getElementById("root").innerHTML = register();
