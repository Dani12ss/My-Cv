/* esta primera parte es para obtener la informacion del API*/

const api = "https://rickandmortyapi.com/api/character";

const obtenerInfo = (urlApi) => {
    return fetch(urlApi)
        .then (response => response.json()) /* Json se usa para que la informacion de la API sea traida en este formato, porque tambien puede traerse en texto*/
        .then (data => {
        console.log (data)
        getcharacters(data) /*Aqui es donde me va a traer la informacion de la Api*/
        })
        .catch (error => {
            console.error(error)

        })
}
/* SEGUNDA PARTE para obtener las cartas*/

function getcharacters(row){
    const box =document.createRange().createContextualFragment(`
    <div>
        <h2>${row.name}</h2>  
        <div >
        <img src=" ${row.image}  " alt="Personaje">
        </div>  
        <span> ${row.gender} </span>
        <span> ${row.status} </span>
    </div>`
    )
    return box 
}

