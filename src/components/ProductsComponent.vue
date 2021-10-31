<template>
    <div class="row">
        <!-- Categorias -->
        <div class="col-md-2">
            Categories...
        </div>
        <!-- Productos -->
        <div class="col-md-7">
            <div class="mt-3">
                <div v-for="product in allProducts" key="product.id" class="m-3 animate__animated animate__fadeIn">
                    <div 
                    class="card col-md-12" 
                    
                    >
                    <div class="row">
                        <div class="col-md-3">
                        <img :src=product.image alt="" style="max-width: 90px" class="align-middle">
                        </div>
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card-title m-2">
                                        {{product.title}}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <button 
                                        class="btn btn-primary btn-sm" 
                                        @click="accionAddItemTocart(product)"
                                        >+</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <strong>Price:</strong> ${{product.price}}
                            </div>
                            <div class="card-body">
                                <strong> Description:</strong> {{product.description}}
                            </div>                  
                        </div>
                    </div>
                    </div>
                </div>      
            </div>        
        </div>
        <!-- Carrito -->
        <div class="col-md-3">
            <cart-component></cart-component>
        </div>
    </div>
</template>

<script>
//Import mapstate from VueX
import {mapState, mapMutations, mapActions} from 'vuex'
import CartComponent from '../components/CartComponent.vue'

export default {
    name: 'ProductsComponent',
    data(){
      return {
        products : []
      }
    },
    created() {
        if(this.allProducts.length == 0){
            this.accionMakeHTTPCallout()
        }else{
            console.log('El state de products NO esta vacio')
            console.log('Tamaño del state de productos: ',this.allProducts.length)
        }
    },
    methods: {
        ...mapActions(['accionMakeHTTPCallout', 'accionAddItemTocart']),
        addToCart(product){
            //console.log('Se selecciono el producto: ', product)
            accionAddItemTocart(product)
        }
    },
    computed:{
        ...mapState(['allProducts']),
    },
    components: {
        CartComponent
    } 

}
</script>

<style>

</style>