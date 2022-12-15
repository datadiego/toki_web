<script setup>
import { ref, computed } from "vue";
import csv from "./assets/tokipona.csv";

const numero_aleatorio = (max) => Math.floor(Math.random() * max);
const palabra_aleatoria = () => csv[Math.floor(Math.random() * csv.length)];

const estado_titulo = ref("btn btn-light")
const estado_boton2 = ref("btn btn-outline-light inactive")
const estado_boton3 = ref("btn btn-outline-light inactive")
const estado_boton4 = ref("btn btn-outline-light inactive")
const estado_boton1 = ref("btn btn-outline-light inactive")
const pregunta_premiada = ref(0);
const puntos = ref(0);
const aciertos = ref(0);
const fallos = ref(0);
const palabra_premio = ref(palabra_aleatoria());
const palabras_ronda = ref([])
const respuesta_seleccionada = ref("")
const tipos_tarjeta = ref(["toki_esp", "esp_toki"])
const tipo_tarjeta = ref("")

const respuesta_correcta = (r) => palabra_premio.value["significado"] == r;
const genera_ronda = () => {
    palabras_ronda.value = [];
    palabra_premio.value = palabra_aleatoria();
    respuesta_seleccionada.value = "";
    tipo_tarjeta.value = tipos_tarjeta.value[numero_aleatorio(tipos_tarjeta.value.length)]

//Agrega cuatro palabras aleatorias a palabras_ronda
    for (let i = 0; i < 4; i++) {
        let nueva = palabra_aleatoria()
        while (nueva == palabra_premio.value || palabras_ronda.value.includes(nueva)) {
            nueva = palabra_aleatoria()
        }
        palabras_ronda.value.push(nueva)
    }
    //Sustituye uno de los elementos de la ronda por la premiada
    pregunta_premiada.value = numero_aleatorio(palabras_ronda.value.length);
    palabras_ronda.value[pregunta_premiada.value] = palabra_premio.value;
    estado_titulo.value = "btn btn-light"
    estado_boton1.value = "btn btn-outline-light inactive"
    estado_boton2.value = "btn btn-outline-light inactive"
    estado_boton3.value = "btn btn-outline-light inactive"
    estado_boton4.value = "btn btn-outline-light inactive"
    }

const comprueba_respuesta = (respuesta) => {
    respuesta_seleccionada.value = respuesta;
 if (respuesta_correcta(respuesta)) {
    puntos.value += 1;
    aciertos.value += 1;
    estado_titulo.value = "btn btn-success"
 } else {
    puntos.value -= 1;
    fallos.value += 1;
    estado_titulo.value = "btn btn-danger"
 }
if(pregunta_premiada.value == 0){
    estado_boton1.value = "btn btn-success"
} else if(pregunta_premiada.value == 1){
    estado_boton2.value = "btn btn-success"
} else if(pregunta_premiada.value == 2){
    estado_boton3.value = "btn btn-success"
} else if(pregunta_premiada.value == 3){
    estado_boton4.value = "btn btn-success"
}
//haz un setTimeout para que se vea el color de la respuesta
setTimeout(() => {
    genera_ronda();
}, 1314);
}

genera_ronda()
</script>

<template>
        <div class="container text-center mt-3">
        <h1 id="toki_titulo">kama sona e nimi pi toki+pona</h1>
        
        <!-- <h2 id="toki">nanpa e {{aciertos-fallos}}</h2> -->
        <h3 id="toki">toki+pona li nanpa{{aciertos}}</h3>
        <h3 id="toki">toki+ike li nanpa{{fallos}}</h3>
        <h1 id="toki_grande">{{palabra_premio["palabra"]}}</h1>
        <div class="btn-group-vertical btn-group-lg">
            <button v-if="tipo_tarjeta=='toki_esp'" v-bind:class="estado_titulo">{{palabra_premio["significado"]}}</button>
            <button v-if="tipo_tarjeta=='esp_toki'" v-bind:class="estado_titulo">{{palabra_premio["palabra"]}}</button>

            <button v-if="tipo_tarjeta=='toki_esp'" @click="comprueba_respuesta(palabras_ronda[0]['significado'])" v-bind:class="estado_boton1" role="button">{{palabras_ronda[0]["palabra"]}}</button>
            <button v-if="tipo_tarjeta=='esp_toki'" @click="comprueba_respuesta(palabras_ronda[0]['significado'])" v-bind:class="estado_boton1" role="button">{{palabras_ronda[0]["significado"]}}</button>

            <button v-if="tipo_tarjeta=='toki_esp'" @click="comprueba_respuesta(palabras_ronda[1]['significado'])" v-bind:class="estado_boton2" role="button">{{palabras_ronda[1]["palabra"]}}</button>
            <button v-if="tipo_tarjeta=='esp_toki'" @click="comprueba_respuesta(palabras_ronda[1]['significado'])" v-bind:class="estado_boton2" role="button">{{palabras_ronda[1]["significado"]}}</button>

            <button v-if="tipo_tarjeta=='toki_esp'" @click="comprueba_respuesta(palabras_ronda[2]['significado'])" v-bind:class="estado_boton3" role="button">{{palabras_ronda[2]["palabra"]}}</button>
            <button v-if="tipo_tarjeta=='esp_toki'" @click="comprueba_respuesta(palabras_ronda[2]['significado'])" v-bind:class="estado_boton3" role="button">{{palabras_ronda[2]["significado"]}}</button>

            <button v-if="tipo_tarjeta=='toki_esp'" @click="comprueba_respuesta(palabras_ronda[3]['significado'])" v-bind:class="estado_boton4" role="button">{{palabras_ronda[3]["palabra"]}}</button>
            <button v-if="tipo_tarjeta=='esp_toki'" @click="comprueba_respuesta(palabras_ronda[3]['significado'])" v-bind:class="estado_boton4" role="button">{{palabras_ronda[3]["significado"]}}</button>
        </div>
    </div>
</template>


<style>
body{
background-color: rgb(48, 48, 48);
}
h1,h2,h3{
    color: rgb(215, 215, 215);
}

@font-face {
    font-family: linja_pona;
    src: url("./assets/linja-pona-4.9.otf") format("opentype");
}
@media (min-width: 768px) {
    .btn-group-lg>.btn, .btn-lg{
        min-width: 500px;
    }
}

#toki{
    font-family: "linja_pona";
    font-size: 3em;
}
#toki_grande{
    font-family: "linja_pona";
    font-size: 5em;
}
#toki_titulo{
    font-family: "linja_pona";
    font-size: 3em;
    color: rgb(126, 255, 175);
}
@media (hover: none) {
    .inactive:hover {
        color: rgb(215, 215, 215);
        background-color: rgb(48, 48, 48);
    }
    .active:hover{
        color: rgb(215, 215, 215);
        background-color: rgb(48, 48, 48);
    }
}
</style>