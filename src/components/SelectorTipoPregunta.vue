<template>
    <div>
        <select v-model="tipo_de_ronda" name="selectPregunta">
            <option value="aleatorio">Aleatorio</option>
            <option value="sitelen_esp">sitelen pona > Español</option>
            <option value="sitelen_toki">sitelen pona > toki pona</option>
            <option value="toki_esp">toki pona > Español</option>
            <option value="toki_sitelen">toki pona > sitelen pona</option>
            <option value="esp_sitelen">Español > sitelen pona</option>
            <option value="esp_toki">Español > toki pona</option>
            
          </select>
    </div>
</template>

<script>
export default {

  data() {
    return {
      tipo_de_ronda: 'aleatorio',
    }
  },
    watch:{
        tipo_de_ronda(nuevoTipo, anteriorTipo){
            this.$emit('tipo-pregunta-cambiada', nuevoTipo)
        }
    }
}
</script>

<style>

</style>