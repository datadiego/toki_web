async function mostrar_diccionario(){
    const response = await fetch("frases_comunes.csv");
    const data = await response.text();
    const datos = data.split('\n');
    const frases = datos.map(row => row.split(','));
    const frase = frases.map(row => row[0]);
    const significado = frases.map(row => row.slice(1));
    console.log(frase[2])
    for (i = 0; i < frase.length-1; i++){
        document.querySelector('#tabla-frases').innerHTML += `<tr><td>${frase[i]}</td><td>${significado[i]}</td></tr>`;
    }   
}

window.onload = function() {
    mostrar_diccionario();
}