<template>
    <div class="container">
      <div>Duration: {{this.duration}}</div>

      <div class="clicker">
        <Click></Click>
      </div>
      <div class="result">{{parseInt(result.clickCount)}}</div>
      <div v-if="result.clickCount>=10">
        <buy-clicker></buy-clicker>
      </div>
      <div v-if="result.clickersBought>=1">
        <p>clickers: {{result.clickersBought}}</p>
      </div>
      <div>
        <game-ended></game-ended>
      </div>
    </div>
</template>

<script>
    import Click from "../components/clickerGame/Click";
    import BuyClicker from "../components/clickerGame/buyClicker";
    import GameEnded from "../components/clickerGame/GameEnded";
    import moment from "moment";
    var inter
    var downInter

    export default {
        name: "DynamitClicker",
      components: {GameEnded, BuyClicker, Click},
      data() {
        return {
          click: this.$store.state.dynamaite.clickCount,
          downCounter:0,
          duration:""
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
            var newCurrentTime = this.$moment(this.$moment())
            var time = this.$moment.duration(newCurrentTime.diff(this.result.gameStartTime))

            this.duration=this.$moment(time.asMilliseconds(),"").format("mm:ss")
            if(parseInt(time.as("second"))%6<1)
            {
              this.downCounter++;
            }
            this.$store.dispatch('addClick', -(parseInt(this.downCounter)))
            if(this.$store.state.dynamaite.clickCount<0){
              this.$store.dispatch('gameOverAction');
              this.downCounter=1;
              clearInterval(downInter);
              clearInterval(inter);
            }
          },1000)
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
