async function mostrar_diccionario(){
    const response = await fetch("frases.csv");
    const data = await response.text();
    const datos = data.split('\n');
    console.log(datos)
}

window.onload = function() {
    mostrar_diccionario();
}