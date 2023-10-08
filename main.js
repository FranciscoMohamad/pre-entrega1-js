//Preguntamos el nombre al usuario y guardamos el dato en variable:
const nombreUsuario = prompt("Ingrese su nombre")
//Saludamos al usuario:
alert ("Bienvenido a nuestra Libreria " + nombreUsuario + "!")
//Le hacemos elegir uno de los 4 libros:
let preguntaUsuario = prompt (`Elija el libro a utilizar:
    1: Ciencia
    2: Matemáticas
    3: Economía
    4: Administración`)
//Transformamos la Variable "preguntaUsuario" para que sea CaseSensitive:
preguntaUsuario = preguntaUsuario.toLowerCase()
//Identificar el libro y si desea o no comprarlo:
function buscarLibro () {
    if (preguntaUsuario == "ciencia" || preguntaUsuario == "1"){
         respuesta = confirm(nombreUsuario + ", Deseas comprar Ciencia por : $ 4500 ?")
         return respuesta;
    }else if (preguntaUsuario == "matemáticas" || preguntaUsuario == "2"){
        respuesta = confirm(nombreUsuario + ", Deseas comprar Matemáticas por: $ 3000 ?")
        return respuesta;
    }else if (preguntaUsuario == "economía" || preguntaUsuario == "3"){
        respuesta = confirm(nombreUsuario + ",  Deseas comprar Economía por : $ 5000 ?")
        return respuesta;
    }else if (preguntaUsuario == "administración" || preguntaUsuario == "4"){
        respuesta = confirm(nombreUsuario + ", Deseas comprar Administración por : $4000 ?")
        return respuesta;
    }else{
        alert ("Por favor ingrese un libro disponible")
        return false;
    }
}
//Preguntamos su direccion y eviamos el libro
if (buscarLibro() == true) {
    direccion = prompt("Coloque su dirección para enviar el libro")
    confirmarDireccion = alert ("su libro sera enviado a: " + direccion)
    alert ("Gracias por su compra")
}else{
    alert("Muchas Gracias por su visita")
}