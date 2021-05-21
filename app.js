
/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require("fs");

exports.leerTareas = function () {
     /*
        En esta función debes leer y retornar las tareas registradas.
    */
    let texto = fs.readFileSync("./tareas.json");
    return JSON.parse(texto);
}
exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
    let tareas = exports.leerTareas();
    tareas.push(tarea);
    let formato = JSON.stringify(tareas);
    fs.writeFileSync("./tareas.json", formato);
}
exports.filtrarTareasPorEstado = function (status) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
    let tareas = exports.leerTareas();
    return tareas.filter((tarea) => tarea.status === status);
}