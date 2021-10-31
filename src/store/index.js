import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 100,
    inputVariable: '',
    allProducts: [],
    cart: []
  },
  mutations: {
    incrementar(state){
      state.contador = state.contador + 10
    },
    disminuir(state, numero){

      if(numero == null ){
        state.contador = state.contador - 10
      }else{
        state.contador = state.contador - parseInt(numero) 
      }
      // console.log('El numero es: ', numero)

    },
    incrementarContadorConInput(state, valorInput){
      state.contador = state.contador + parseInt(valorInput) 
    },
    fillAllProducts(state, products){
      state.allProducts = products
    },
    addItemToCart(state, productSelected){
      //productSelected.quantity = 1

      // Logic to verify is product already exits
        // Si existe le sumams quantity + 1
      let productExits = false
        state.cart.forEach(item => {
          if(item.id == productSelected.id){
          productExits = true
          item.quantity = item.quantity +1
        }
      });
        // No existe, se añade como nuevo y quantity 1
      if(!productExits){
        productSelected.quantity = 1
        state.cart.push(productSelected)
      }

    },
    removeItemFromCart(state, productSelected){
      state.cart = state.cart.filter(item => item !== productSelected)
    },
    alterarCantidad(state, payload){
      // console.log('MUTATION: ', payload);
      if(payload.boton == 'disminuir'){
          state.cart.forEach(item => {
            if(item.id == payload.producto){
            item.quantity > 1 ? item.quantity = item.quantity - 1 : state.cart = state.cart.filter(item => item.id !== payload.producto)
          }
        });
      }else if(payload.boton == 'incrementar'){
          state.cart.forEach(item => {
            if(item.id == payload.producto){
            item.quantity = item.quantity + 1
          }
        });
      }
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar')
    },
    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    },
    accionIncrementarContadorConInput({commit}, valorInput){
      commit('incrementarContadorConInput', valorInput)
    },
    accionFillProducts({commit}, products){
      commit('fillAllProducts', products)
    },
    async accionMakeHTTPCallout({commit}){
        let dataToStore;
        await axios.get('https://fakestoreapi.com/products')
        .then(response => ( dataToStore = response.data))
        .catch(function (error) {
          console.log(error);
              })
        console.log("los datos que llegaron fueron: ", this.dataToStore)

        commit('fillAllProducts', dataToStore)
    },
    accionAddItemTocart({commit}, productSelected){
      // console.log('Product Selected: ', productSelected)
      commit('addItemToCart', productSelected)
    },
    accionRemoveItemFromCart({commit}, productSelected){
      commit('removeItemFromCart', productSelected)
      // console.log('[STORE]: ', productSelected);
    },
    accionAlterarCantidad({commit}, payload){
      commit('alterarCantidad', payload )
    }
  },
  modules: {
  }
})
