<template>
    <div>
        <h1 id="puntos"> 👌 {{ aciertos }} 💀 {{ fallos }}</h1>
    </div>
</template>

<script>
export default {
    props: ['aciertos', 'fallos']
}
</script>

<style>
#puntos{
    font-size: 3.5em;
    text-align: center;
    margin: 0;
    margin-bottom: 0.5em;
}
</style>