<template>
  <div class="card" :class="{'has-text-success': success,'has-background-dark': dark }">
    <div class="card-content">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Card"
    }
</script>

<style scoped>

</style>
