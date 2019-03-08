<template>
    <div class="container">
      <div class="clicker">
        <Click></Click>
      </div>
      <div class="result">{{result.clickCount}}</div>
      <div v-if="result.clickCount>10">
        <buy-clicker></buy-clicker>
      </div>
    </div>
</template>

<script>
    import Click from "../components/Click";
    import BuyClicker from "../components/buyClicker";
    export default {
        name: "DynamitClicker",
      components: {BuyClicker, Click},
      data() {
        return {
          click: this.$store.state.dynamaite.clickCount
        }
      },
      computed: {
        result(){
          return this.$store.state.dynamaite
        },
        moreThan10(){
          console.log("10")
        }
      }

    }
</script>

<style scoped>
  .clicker{
    max-width: 40%;
  }

</style>
