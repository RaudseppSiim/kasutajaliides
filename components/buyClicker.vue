<template>
    <div>
      <button @click="buyClicker">OSTA CLICKER</button>
    </div>
</template>

<script>
    export default {
        name: "buyClicker",
      methods:{
        buyClicker(){
          this.$store.dispatch('buyClicker')
        }
      }
    }
</script>

<style scoped>

</style>
