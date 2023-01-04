<template>
    <div>
        <ul>
            <li
            v-if="tipo_ronda == 'sitelen_esp'"
            v-for="opcion in opciones_ronda"
            :key="opcion.id"
            @click="$emit('select', opcion)"
            >{{opcion.significado}}</li>
            
            <li
            v-if="tipo_ronda == 'sitelen_toki'"
            v-for="opcion in opciones_ronda"
            :key="opcion.id"
            @click="$emit('select', opcion)"
            >{{opcion.palabra}}</li>

            <li
            v-if="tipo_ronda == 'toki_sitelen'"
            v-for="opcion in opciones_ronda"
            :key="opcion.id"
            @click="$emit('select', opcion)"
            class="toki"
            >{{opcion.palabra}}</li>

            <li
            v-if="tipo_ronda == 'toki_esp'"
            v-for="opcion in opciones_ronda"
            :key="opcion.id"
            @click="$emit('select', opcion)"
            >{{opcion.significado}}</li>

            <li
            v-if="tipo_ronda == 'esp_sitelen'"
            v-for="opcion in opciones_ronda"
            :key="opcion.id"
            @click="$emit('select', opcion)"
            class="toki"
            >{{opcion.palabra}}</li>

            <li
            v-if="tipo_ronda == 'esp_toki'"
            v-for="opcion in opciones_ronda"
            :key="opcion.id"
            @click="$emit('select', opcion)"
            >{{opcion.palabra}}</li>


        </ul>
    </div>
</template>

<script>
export default {
    props:{
        opciones_ronda:{
            type: Array,
            required: true
        },
        tipo_ronda:{
            type: String,
            required: true
        }
    }

}
</script>

<style>
ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
}
li{
    display:inline-block;
    padding: 10px;
    border-radius: 12px;
    list-style: none;
    width: 70%;
    text-align: center;
    background-color: #118AB2;
    color: antiquewhite;
    border: 6px solid #FFD166;
    box-shadow: 3px 3px 0px #073B4C;
    margin-bottom: 30px;
    cursor: pointer;
    font-size: 2em;
}
li:hover{
    background-color: #ffa7ff;
}
li:active{
    background-color: lightgreen;
}
@media screen and (min-width: 600px){
    li{
        font-size: 1.5;
    }
}

</style>