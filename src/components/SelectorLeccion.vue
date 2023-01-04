<template>
    <div>
        <select v-model="leccion" name="select">
            <!-- <option value="0" hidden disabled>Elige una lección</option> -->
            <option value="1">Vocabulario</option>
            <option value="2">Vocales</option>
            <option value="3">Familiares</option>
            <option value="4">Saludos/Despedidas</option>
            <option value="5">Sitios y cosas</option>
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
select{
    min-width: 200px;
    font-size: 20px;
    padding: 10px;
    text-align: center;
    background-color: #ff00ff;
    color: #212121;
    border: 6px solid #a000a0;
    box-shadow: 3px 3px 0px #550044;
    border-radius: 12px;
    margin-bottom: 30px;
  }

@media screen and (max-width: 600px) {
  select{
    min-width: 100px;
    font-size: 20px;
    padding: 5px;
    text-align: center;
    
  }
}


</style>