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
    mostrar_diccionario();
}