<template>
  
    <button class="btn btn-info m-1 p-1" 
            @click="accionDisminuir(50)" 
            > Accion Decrementar Componente </button>

</template>

<script>
//Import mapstate from VueX
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    name: 'DisminuirComponent',
    methods: {
        // se mapea la mutation que esta en el store > mutations
        ...mapMutations(['incrementar', 'disminuir']),
        ...mapActions(['accionIncrementar', 'accionDisminuir']) 
    }
}
</script>

<style>

</style>