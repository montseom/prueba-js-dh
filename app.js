/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/

const fs = require("fs");

let leerTareas = function () {
    let texto = fs.readFileSync("./tareas.json");
    return JSON.parse(texto);
}


let agregarTarea = function (tarea) {
    let tareas = leerTareas();
    tareas.push(tarea);
    let formato = JSON.stringify(tareas);
    fs.writeFileSync("./tareas.json", formato);
}

let filtrarTareasPorEstado = function (estado) {
    let tareas = leerTareas();
    return tareas.filter(({ status }) => status === estado);
}

module.exports = 
{
    leerTareas, 
    agregarTarea, 
    filtrarTareasPorEstado
};