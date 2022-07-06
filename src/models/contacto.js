

class Contacto {
    nombre = "Undefined";
    apellido =  "Undefined";
    email = 'No Email';
    conectado = false

    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}

export { Contacto }