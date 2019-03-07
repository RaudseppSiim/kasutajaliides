<template>
  <div class="section">
    <Tabs>
      <Tab title="Home" :active="true">
        Cool home page
      </Tab>
      <Tab title="About">
        Cool about page
      </Tab>
      <Tab title="Content">
        Cool Content page
      </Tab>
    </Tabs>
  </div>
</template>

<script>

  import Tabs from "../components/Tabs";
  import Tab from "../components/Tab";
  export default {
    components: {Tab, Tabs},
    data() {
      return {
        name: "",
        surname: ""
      }
    },
    methods: {

    },
    computed: {
      fullname(){
        return this.name + " " + this.surname;
      }
    }
  }
</script>
<style>
</style>
