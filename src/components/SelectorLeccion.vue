<template>
    <div>
        <select v-model="leccion" name="select">
            <!-- <option value="0" hidden disabled>Elige una lección</option> -->
            <option value="1">Pu/Vocabulario</option>
            <option value="2">Frases comunes</option>
            <!-- <option value="3">Familiares</option>
            <option value="4">Saludos/Despedidas</option>
            <option value="5">Sitios y cosas</option> -->
          </select>
    </div>
</template>

<script>
export default {

  data() {
    return {
      leccion: '1'
    }
  },
    watch:{
        leccion(nuevaLeccion, anteriorLeccion){
            this.$emit('leccion-cambiada', nuevaLeccion)
        }
    }
}
</script>

<style>


</style>