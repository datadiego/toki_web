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
    width: 240px;
    text-align: center;
    font-size: 20px;
    background-color: #ff00ff;
    color: #212121;
    border: 6px solid #a000a0;
    box-shadow: 3px 3px 0px #550044;
    margin-bottom: 30px;
    cursor: pointer;
}
li:hover{
    background-color: #ffa7ff;
}
li:active{
    background-color: lightgreen;
}

@media screen and (max-width: 600px) {
    li{
        width: 200px;
        margin: 5px;
    }
}
</style>