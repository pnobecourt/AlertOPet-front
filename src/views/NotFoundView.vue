<template> 
        <NotFound></NotFound>        
</template>

<script>
import NotFound from '../components/NotFound.vue';
export default {
    // des données privées pour dynamiser le composant
    data() {
        return {
        }
    },
    // components permet de déclarer les composants enfants
    components: {
        NotFound
    }
}
</script>