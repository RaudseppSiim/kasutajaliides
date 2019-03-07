<template>
  <div>
  <button @click="show">Open Modal</button>
  <Modal>Why we haveto make this in vue. Same things exist in react and react is more fun</Modal>
  </div>
</template>

<script>
    import Modal from "../components/Modal";
    export default {
        name: "modalpage",
      components: {Modal},
      data(){
          return{
          modalMode:true
        }
      },
      created(){
          console.log(this.$store)
      },
      methods:{
        show(){
          this.$store.dispatch('toggleModal');
        },
          turnOn(){
            console.log(this.modalMode)
            console.log(this.$store)

          }
      }
    }
</script>

<style scoped>

</style>
