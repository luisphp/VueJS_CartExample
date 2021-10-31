<template>
  <div class="sticky-top m-0 p-0">
      <h4>Cart</h4>
  
        <!-- Productos -->
        <div class="col-md-12 mt-2">
            <div class="mt-3">
                <div v-for="product in cart" key="product.id" class="m-3 animate__animated animate__fadeIn">
                    <div 
                    class="card col-md-12"
                    >
                    <div class="row">
                        <div class="col-md-3">
                            <img :src=product.image alt="" style="width: 100%" class="align-middle m-1">
                        </div>
                        <div class="col-md-9">
                            <div class="card-title m-2 col-md-12">
                                {{product.title.slice(0,10)}}...
                                <span class="float-right">
                                    <button 
                                    class="btn btn-sm btn-outline-danger"
                                    @click="accionRemoveItemFromCart(product)"
                                    >X</button>
                                </span>
                            </div>
                            <div class="card-body">
                                <div>
                                    <strong>Price:</strong> ${{product.price}} 
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-2 p-0">
                                        <button 
                                        class="btn btn-sm btn-secondary"
                                        @click="accionAlterarCantidad({producto: product.id, boton:'disminuir', evento: $event})"
                                        >-</button>
                                    </div>
                                    <div class="col-md-8">
                                        <strong>Quantity:</strong> {{product.quantity}} 
                                        </div>
                                    <div class="col-md-2 p-0">
                                        <button 
                                            class="btn btn-sm btn-secondary"
                                            @click="accionAlterarCantidad({producto: product.id, boton:'incrementar', evento: $event})"
                                            >+</button>
                                        </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                </div>      
            </div>        
        </div>    
    </div>
</template>

<script>
//Import mapstate from VueX
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'CartComponent',
    computed:{
        ...mapState(['cart']),
    },
    methods: {
        ...mapActions(['accionRemoveItemFromCart', 'accionAlterarCantidad'])
    }

}
</script>

<style>

</style>