//window.addEventListener('DOMContentLoaded', getcharacters)

function crearCard(character) {
    return ` 
    <article >
        <div id="cards" >
            <h2 id="name" >${character.name}</h2>
            <div>
                <img id="image" src="${character.image}" alt="Personaje">
            </div>  
            <span id="gender" > ${character.gender} </span>
            <span id="status" > ${character.status} </span>
        </div>
    </article>`
}


function getcharacters (){
    const results = fetch ("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json()
        .then(data => {
            console.log(data.results);


            let resultados = "";

            for(let i=0; i<data.results.length; i++) {
                let row = data.results[i];

                let card = crearCard(row)

                resultados = resultados + card;

            }

            console.log(resultados);

            document.getElementById("boxCharacter").innerHTML = resultados;

        }));
}

function getFemalescharacters (){
    const results = fetch ("https://rickandmortyapi.com/api/character/?gender=female");

    results
        .then(response => response.json()
        .then(data => {
            console.log(data.results);


            let resultados = "";

            for(let i=0; i<data.results.length; i++) {
                let row = data.results[i];

                let card = crearCard(row)

                resultados = resultados + card;

            }

            console.log(resultados);

            document.getElementById("boxCharacter").innerHTML = resultados;

        }));
}
function getMalescharacters (){
    const results = fetch ("https://rickandmortyapi.com/api/character/?gender=male");

    results
        .then(response => response.json()
        .then(data => {
            console.log(data.results);


            let resultados = "";

            for(let i=0; i<data.results.length; i++) {
                let row = data.results[i];

                let card = crearCard(row)

                resultados = resultados + card;

            }

            console.log(resultados);

            document.getElementById("boxCharacter").innerHTML = resultados;

        }));
}
function getAlivecharacters (){
    const results = fetch ("https://rickandmortyapi.com/api/character/?status=alive");

    results
        .then(response => response.json()
        .then(data => {
            console.log(data.results);


            let resultados = "";

            for(let i=0; i<data.results.length; i++) {
                let row = data.results[i];

                let card = crearCard(row)

                resultados = resultados + card;

            }

            console.log(resultados);

            document.getElementById("boxCharacter").innerHTML = resultados;

        }));
}function getDeadcharacters (){
    const results = fetch ("https://rickandmortyapi.com/api/character/?status=dead");

    results
        .then(response => response.json()
        .then(data => {
            console.log(data.results);


            let resultados = "";

            for(let i=0; i<data.results.length; i++) {
                let row = data.results[i];

                let card = crearCard(row)

                resultados = resultados + card;

            }

            console.log(resultados);

            document.getElementById("boxCharacter").innerHTML = resultados;

        }));
}
