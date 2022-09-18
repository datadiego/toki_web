const peticion_toki_esp = new XMLHttpRequest();
async function toki_esp(){
    palabra = document.querySelector('#palabra_toki').value
    const response = await fetch("tokipona.csv");
    const data = await response.text();
    const diccionario = data.split('\n');
    const palabras = diccionario.map(row => row.split(','));
    const tokipona_word = palabras.map(row => row[0]);
    const significado = palabras.map(row => row.slice(1));
    for (i = 0; i < tokipona_word.length; i++){
        if (palabra == tokipona_word[i]){
            document.querySelector('#palabra').innerHTML = palabra;
            document.querySelector('#significado').innerHTML = significado[i];
        }
    }
}

async function mostrar_diccionario(){
    const response = await fetch("tokipona.csv");
    const data = await response.text();
    const diccionario = data.split('\n');
    const palabras = diccionario.map(row => row.split(','));
    const tokipona_word = palabras.map(row => row[0]);
    const significado = palabras.map(row => row.slice(1));
    for (i = 0; i < tokipona_word.length-1; i++){
        document.querySelector('#tabla-diccionario').innerHTML += `<tr><td>${tokipona_word[i]}</td><td>${significado[i]}</td></tr>`;
    }
}

window.onload = function() {
    const text_input = document.querySelector('#palabra_toki');
    text_input.addEventListener('input', toki_esp);
    mostrar_diccionario();
}