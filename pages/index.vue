<template>
  <div class="body">
    <div class="container">
        <v-text-field type="text" v-model="text" placeholder="type in text"/>
      <v-text-field type="text" v-model="name" placeholder="type in text"/>
      <v-text-field type="text" v-model="surname" placeholder="type in text"/>
      <p class="response">{{fullName}}</p>
      <p class="response">{{text.split("").reverse().join("")}}</p>
    </div>
    <div class="rating">
      <v-rating class="center" v-model="rating"></v-rating>
      <v-time-picker format="24h" v-model="time"></v-time-picker>
      <p>{{time}}</p>
    </div>
    <div class="container">
      <v-text-field type="text" v-model="newFruits" placeholder="add to list"/>
      <v-btn @click="addFruit(newFruits)">Add to list</v-btn>
      <ul>
        <li v-for="fruit in fruits">{{fruit}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      rating:3,
      time: "00:00",
      text: "",
      name:"",
      surname:"",
      newFruits:"",
      fruits:["Apelsin","melon","grape"]
    }
  },
  methods:{
    addFruit(fruit){
      this.fruits.push(fruit)
      this.newFruits=""
    }
  },
  computed:{
    fullName(){
      return this.name + " " + this.surname
    }
  }
}
</script>
<style>
  .rating{
    width: 31%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
  .body{
    display: flex;
    width: 100%;
    height: 100%;

  }
</style>
