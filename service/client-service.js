/*Abrir http(método,url) 

CRUD        Método HTTP
Create      -POST
Read        -GET
Update      -PUT/PATCH
Delete      -DELETE
*/

//FETCH API (Sirve para manejar las promesas de forma abreviada)
const listaClientes = () => fetch("http://localhost:3000/perfil").then( respuesta => respuesta.json());

export const clientServices = {
    listaClientes,      //En las nuevas versiones de js solo se define el objeto una vez y sirve como llave y como valor
}