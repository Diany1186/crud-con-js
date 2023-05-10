import { clientServices } from "../service/client-service.js";

const obtenerInformacion = () => {
    const url = new URL(window.location);//esta clase ya viene definida dentro de js que obtiene la url en la que estamos actualmente
    const id = url.searchParams.get("id");//obtiene el id enviado en el url

    if (id == null) {
        window.location.href = "/screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    console.log(nombre,email);   

    clientServices.detalleCliente(id).then( perfil => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    });
}

obtenerInformacion(); 