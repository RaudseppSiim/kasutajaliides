<template>
    <div>
      <a @click="changeColor">
        <img v-bind:style="bgc" src="../assets/dynamite-svgrepo-com.svg">
      </a>
    </div>
</template>

<script>
    export default {
        name: "Click",
      data(){
        bgc:""
      },
      methods:{
          changeColor(){
              bgc = 'style="filter: invert(0.1) sepia(1) saturate(0) hue-rotate(2deg);"';
          }
      }
    }
</script>

<style scoped>

</style>
