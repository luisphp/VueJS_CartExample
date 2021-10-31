<template>
  
  <div class="">
      <h4 class="animate__animated animate__fadeIn">Welcome to ProductsView!</h4>
        
      <products-component></products-component>
  </div>
</template>

<script>
import ProductsComponent from '../components/ProductsComponent.vue'

export default {
    name: 'Products',
    components: {
        ProductsComponent
    }

}
</script>

<style>

</style>