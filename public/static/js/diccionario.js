async function mostrar_diccionario(){
    const response = await fetch("tokipona.csv");
    const data = await response.text();
    const diccionario = data.split('\n');
    const palabras = diccionario.map(row => row.split(','));
    const tokipona_word = palabras.map(row => row[0]);
    const significado = palabras.map(row => row.slice(1));
    for (i = 1; i < tokipona_word.length-1; i++){
        document.querySelector('#seccion_diccionario').innerHTML += `<div class="entrada_diccionario">
        <p class="tokipona">${tokipona_word[i]}</p>
        <p class="description">${tokipona_word[i]}</p>
        <p class="description">${significado[i]}</p>
        
        </div><hr/>`;
    }
}
{/* <div class="card">
<p class="description">toki</p>
<p class="tokipona">toki</p>
<p class="description">palabra, idioma, hablar</p>
</div> */}

window.onload = function() {
    mostrar_diccionario();
}

