<script setup>
import { ref, reactive } from "vue";

const products = ref(null);

const getData = async () => {
  const data = await fetch("http://localhost:3232");
  const productsData = await data.json();
  products.value = productsData;
};

getData();
</script>

<template>
  <div class="get-all-products" v-if="products">
    <div v-for="(product, index) in products.products" :key="index" class="product" :class="{black : index%2===0, white : index%2 !== 0}">
      {{ `#${product.id}` }}
      {{ `product - ${product.title}` }}<br>
      {{ `about product - ${product.description}` }}<br>
      {{ `price - ${product.price}$` }}<br>
      <img :src="product.thumbnail" alt="">
    </div>
  </div>
</template>

<style scoped>
.get-all-products {
  max-width: 800px;
  position: relative;
  top: 31px;
  right: -81px;
  display: flex;
  flex-direction: column;
}
.product{
  margin: 5px;
  padding: 10px;
}
.black{
  background-color: black;
  color: white;
}
.white{
  background-color: white;
  color: black;
}
</style>
