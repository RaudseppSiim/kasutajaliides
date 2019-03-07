<template>
  <div class="modal" v-bind:class="{'is-active':active}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <p>Many yes waste time, i no wanna do this.</p>
      <p>I can has real work yez?????</p>
    </div>
    <button @click="turnOff()" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
    export default {
        name: "Modal",
      data(){
          return {
            active: true
       }
      },
      methods:{
       turnOff(){
         this.active=false;
       }
      },
      created() {
          console.log(this)
      }
    }
</script>

<style scoped>

</style>
