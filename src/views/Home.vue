<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="max-width: 40px">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- Este metodo no se recomienda -->
    <!-- <h3>Mi contador {{ $store.state.contador }}</h3> -->

    <!-- Debemos usar la siguiente forma para acceder al state -->
    <!-- usando la propieda computada y el spreadOperator -->
    <h3 :style="colorContador"> Mi Contador es: {{contador}} </h3>
    <button class="btn btn-outline-primary m-1 p-1 bnt-lg" @click="incrementar" > Incrementar </button>
    <button class="btn btn-outline-secondary m-1 p-1 bnt-lg" @click="disminuir" > Disminuir </button>
    <br  >
    <button class="btn btn-outline-warning m-1 p-1 bnt-lg" @click="accionIncrementar" > Accion Incrementar </button>
    <button class="btn btn-outline-danger m-1 p-1 bnt-lg" @click="accionDisminuir" > Accion Decrementar </button>

  <!-- Practica -->
    <div class="row mt-3">
      <div class="col-md-4">
        <disminuir-component></disminuir-component>
      </div>
      <div class="col-md-4">
        <incrementar-component></incrementar-component>
      </div>
    </div>

  <!-- Practica -->
    <div class="row mt-3">
      <div class="col-md-4">
        <input v-model="inputVariable" placeholder="edíteme" type="number">
      </div>
      <div class="col-md-4">
        <button class="btn btn-success" 
        @click="accionIncrementarContadorConInput(inputVariable)">Sumar al contador el input</button>
      </div>
    </div>
          
    <!-- Otro componente -->
    <div>
      <boton-accion></boton-accion>
    </div>
  </div>
</template>

<script>
//Import mapstate from VueX
import {mapState, mapMutations, mapActions} from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DisminuirComponent from '@/components/DisminuirComponent.vue'
import IncrementarComponent from '@/components/IncrementarComponent.vue'
import BotonAccion from '@/components/BotonAccion.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    DisminuirComponent,
    IncrementarComponent,
    BotonAccion
  },
  data(){
    return{
      inputVariable : 0
    }
  }
  ,
  computed: {
    // de esta forma accedemos a las variables creadas en el store > state
    ...mapState(['contador']),
    colorContador(){
      let color
      this.contador  >= 100 ? color = 'color: green' : color = 'color : red'
      return color
    }
  },
  methods: {
    // se mapea la mutation que esta en el store > mutations
    ...mapMutations(['incrementar', 'disminuir']),
    ...mapActions(['accionIncrementar', 'accionDisminuir', 'accionIncrementarContadorConInput'])
  }
}
</script>
