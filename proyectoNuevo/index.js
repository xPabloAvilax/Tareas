/* Definicion de Clase*/
import {Cliente} from "./Cliente.js"
import { Empleado } from "./Empleados/Empleados.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";



//////////////////////////////////////////////////////////////
// const cliente2 = new Cliente("Pablo","78654","98745"); 
const cliente = new Cliente("Leonardo","2313545","54545");
cliente.asignarClave("456789");
console.log("Es el cliente: "+SistemaAutenticacion.login(cliente,"4567889"));

const empleado = new Empleado("Pablo Avila","231314651",10000);
empleado.asignarClave("123456");
console.log(SistemaAutenticacion.login(empleado,"123456"));
const gerente = new Gerente("Elena Moreno","897897",15000);
const director = new Director("Pedro Rivas","879746849",20000);
director.asignarClave("456789");
console.log(SistemaAutenticacion.login(director,"123456"));



 
