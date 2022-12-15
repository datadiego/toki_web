function conversion(){
    const titulo = document.getElementById('test');
    let valor = 10000;
    valor = valor.toLocaleString('es-ES', {minimumFractionDigits: 2});
    titulo.innerHTML = valor;
}
window.onload = function() {
    conversion();
}