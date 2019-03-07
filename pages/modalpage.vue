<template>
  <Modal :active="{modalMode}"></Modal>

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
    }
</script>

<style scoped>

</style>
