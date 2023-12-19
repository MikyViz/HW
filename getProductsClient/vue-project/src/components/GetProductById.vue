<script setup>
import { ref, defineProps } from "vue";

const product = ref(null);

const props = defineProps({
id: String
})

let id = Number(props.id ? props.id : 1)

const getData = async () => {
  const data = await fetch(`http://localhost:3232/getProduct/?id=${id}`);
  const productData = await data.json();
  product.value = productData;
};

getData();
</script>

<template>
  <div class="get-all-products" v-if="product">
    <div
      class="product"  >
      {{ `#${product.id}` }}
      {{ `product - ${product.title}` }}<br />
      {{ `about product - ${product.description}` }}<br />
      {{ `price - ${product.price}$` }}<br />
      <img :src="product.thumbnail" alt="" />
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
.product {
  margin: 5px;
  padding: 10px;
}
.black {
  background-color: black;
  color: white;
}
.white {
  background-color: white;
  color: black;
}
</style>
