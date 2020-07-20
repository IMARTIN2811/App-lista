(function() {
    //accede al id del elemento html
    var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnAgregar = document.getElementById("btn-agregar");

    //funcion
    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            content = document.createTextNode(tarea);

        //Valida si hay contenido en el input text
        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
            tareaInput.className = "error";
            return false;
        }
        //se agrega el contenido al enlace
        enlace.appendChild(content)
        //Le establecemos un atributo href
        enlace.setAttribute("href", "#");
        //Se agrega un nuevo enlace a la nueva tarea(li)
        nuevaTarea.appendChild(enlace);
        //Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);
        //limpia el campo
        tareaInput.value = "";

        //accede al elemento padre y lo elimina
        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });

        }
}
    //Regresa al place holder inicial
    var comprobarInput = function() {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
}
    //accede al elemento padre ul, despues al li y lo elimina
    var eliminarTarea = function() {
        this.parentNode.removeChild(this);
    }

    //Se crea el Evento de los input
    btnAgregar.addEventListener("click",agregarTarea);
    tareaInput.addEventListener("click", comprobarInput);

    //recorre todos los elementos li de la lista
    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);

    }

}());