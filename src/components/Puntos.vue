<template>
    <div>
        <h1> 👌 {{ aciertos }} 💀 {{ fallos }}</h1>
    </div>
</template>

<script>
export default {
    props: ['aciertos', 'fallos']
}
</script>

<style>

</style>