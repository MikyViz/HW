<script setup>
import { ref, defineProps } from 'vue'
import GetAllProducts from './components/GetAllProducts.vue'
import GetProductById from './components/GetProductById.vue'
const id = ref(null)

const updateId = (event) => {
  id.value = event.target.value
}

</script>

<template>
  <header>

    <div class="wrapper">
      <form action="">
        <input type="text" name="" id="" v-model="id" @input="updateId" placeholder="Write the id of a product">
      </form>
      <div v-if="!id">
      <GetAllProducts/>
    </div>
    <div v-if="id">
      <GetProductById :id="id"/>
    </div>
    </div>
  </header>
</template>

<style scoped>

</style>
