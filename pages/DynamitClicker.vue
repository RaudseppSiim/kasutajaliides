<template>
    <div class="container">
      <div class="clicker">
        <Click></Click>
      </div>
      <div class="result">{{parseInt(result.clickCount)}}</div>
      <div v-if="result.clickCount>10">
        <buy-clicker></buy-clicker>
      </div>
      <div v-if="result.clickersBought>=1">
        <p>{{result.clickersBought}}</p>
      </div>
    </div>
</template>

<script>
    import Click from "../components/Click";
    import BuyClicker from "../components/buyClicker";
    var inter
    var downInter

    export default {
        name: "DynamitClicker",
      components: {BuyClicker, Click},
      data() {
        return {
          click: this.$store.state.dynamaite.clickCount
        }
      },

      methods:{
        itervaler(clickerscount){
          clearInterval(inter);
          inter=setInterval(()=>{
            this.$store.dispatch('addClick', clickerscount)
          },1400)
        },
        downItervaler(clickerscount){
          clearInterval(downInter);
          downInter=setInterval(()=>{
            this.$store.dispatch('addClick', -(1))
          },1500/(clickerscount+1))
        },
      },
      computed: {
        result(){
          return this.$store.state.dynamaite
        },
        count () {
          return this.$store.state.dynamaite.clickerBuy
        },
        started () {
          return this.$store.state.dynamaite.gameStarted
        },
      },
      watch:{
        count (newValue) {
          if(newValue===true){
            this.itervaler(this.result.clickersBought)
            this.$store.dispatch('resetBuyClicker')
            this.downItervaler(this.result.clickersBought)
          }
        },
        started (newValue) {
          console.log(newValue)
          if(newValue==true){
            this.downItervaler(this.result.clickersBought)
          }
        }
      },


    }
</script>

<style scoped>
  .clicker{
    max-width: 40%;
  }

</style>
