<template>
  
    <button class="btn btn-primary m-1 p-1" 
            @click="accionIncrementar(50)" 
            > Accion Incrementar Componente </button>

</template>

<script>
//Import mapstate from VueX
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    name: 'IncrementarComponent',
    methods: {
        // se mapea la mutation que esta en el store > mutations
        ...mapMutations(['incrementar', 'disminuir']),
        ...mapActions(['accionIncrementar', 'accionDisminuir']) 
    }
}
</script>

<style>

</style>