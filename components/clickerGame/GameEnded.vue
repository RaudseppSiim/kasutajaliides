<template>
  <div class="modal" :class="{'is-active' : dynamite.gameOver}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <h1 class="title is-1">BOOOOM</h1>
      <p>uupsie woopsie looks like you are dead</p>
      <p>UwU whats this</p>
    </div>
    <button @click="modalClicked" class="modal-close is-large" aria-label="close" ></button>
  </div>
</template>

<script>
    export default {
        name: "GameEnded",
      methods: {
        modalClicked(){
          this.$store.dispatch('gameOverAction');
          this.$store.dispatch('resetGame')
        }
      },
      computed: {
        dynamite() {
          return this.$store.state.dynamaite;
        }
      }
    }
</script>

<style scoped>

</style>
