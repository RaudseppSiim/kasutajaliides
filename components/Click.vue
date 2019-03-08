<template>
    <div>
      <a @click="dynamiteClick">
        <img :style="filter" draggable="false" v-bind:class="{'clicked':click}" src="../static/dynamite-svgrepo-com.svg">
      </a>
    </div>
</template>

<script>
    export default {
        name: "Click",
        data(){
          return{
            click:false,
            rndColor:150,
            styleObject: {
              filter: 'filter: invert(0.5) sepia(1) saturate(2) hue-rotate(' + 2 + 'deg);'
            }
          }
        },
      methods:{
        dynamiteClick(){
          this.$store.dispatch('addClick')
          this.click=true;
          var randomNumber = Math.floor(Math.random() * 360 )+1;
          this.rndColor = randomNumber;
          this.filter= 'filter: invert(0.5) sepia(1) saturate(2) hue-rotate('+this.rndColor+'deg);'
          //document.getElementById("app").style.backgroundColor = this.getRandomColor();
          var returnFromswitch = setInterval(() => {
            clearInterval(returnFromswitch)
              this.click=false;
              this.filter= 'filter: unset'
          },200)
          },
        getRandomColor() {
        var letters = '0123456789ABCDEF';var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
      }
      },
      created() {
          console.log(this.$store)
      }
    }
</script>

<style scoped>



</style>
