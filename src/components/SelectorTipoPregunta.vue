<template>
    <div>
        <select v-model="tipo_de_ronda" name="selectPregunta">
            <option value="aleatorio">Aleatorio</option>
            <option value="hangul_español">sitelen pona > Español</option>
            <option value="hangul_coreano">sitelen pona > toki pona</option>
            <option value="coreano_español">toki pona > Español</option>
            <option value="coreano_hangul">toki pona > sitelen pona</option>
            <option value="español_hangul">Español > sitelen pona</option>
            <option value="español_coreano">Español > toki pona</option>
            
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