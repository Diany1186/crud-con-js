
const listaClientes = () => fetch("http://localhost:3000/perfil").then( respuesta => respuesta.json());

const crearCliente = (nombre,email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email, id: uuid.v4()})
    });
};

export const clientServices = {
    listaClientes,      //En las nuevas versiones de js solo se define el objeto una vez y sirve como llave y como valor
    crearCliente,
};