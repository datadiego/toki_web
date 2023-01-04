<template>
        <div v-if="estado_respuesta=='esperando'">
            <h2 v-if="tipo_ronda_actual=='sitelen_toki'" id="pregunta_actual" class="toki">{{ pregunta_actual.palabra }}</h2>
            <h2 v-if="tipo_ronda_actual=='sitelen_esp'" id="pregunta_actual" class="toki">{{ pregunta_actual.palabra }}</h2>
            <h2 v-if="tipo_ronda_actual=='toki_esp'" id="pregunta_actual">{{ pregunta_actual.palabra }}</h2>
            <h2 v-if="tipo_ronda_actual=='toki_sitelen'" id="pregunta_actual">{{ pregunta_actual.palabra }}</h2>
            <h2 v-if="tipo_ronda_actual=='esp_toki'" id="pregunta_actual">{{ pregunta_actual.significado }}</h2>
            <h2 v-if="tipo_ronda_actual=='esp_sitelen'" id="pregunta_actual">{{ pregunta_actual.significado }}</h2>           
        </div>
        <div v-else-if="estado_respuesta=='correcto'">
            <h2 v-if="numero_ronda>1" @click="getPregunta" id="respuesta_correcta" >{{mensaje}} </h2>
            <p v-else @click="getPregunta" id="respuesta_correcta">{{mensaje}}<br/>(Pulsame para ir a la siguiente pregunta)</p>
        </div>
        <div v-else-if="estado_respuesta=='incorrecto'">
            <h2 v-if="numero_ronda>1" @click="getPregunta" id="respuesta_incorrecta" >{{mensaje}} </h2>
            <p v-else @click="getPregunta" id="respuesta_incorrecta">{{mensaje}}<br/>(Pulsame para ir a la siguiente pregunta)</p>
        </div>
    
</template>

<script>
export default {
    name: "PreguntaResultado",
    props: {
        estado_respuesta: String,
        mensaje: String,
        numero_ronda: Number,
        tipo_ronda_actual: String,
        pregunta_actual: Object
    },
    methods: {
        getPregunta(){
            this.$emit('nueva-pregunta')
        }
    }

}
</script>

<style>

</style>