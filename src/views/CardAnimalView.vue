<template> 
        <CardAnimal></CardAnimal>        
</template>

<script>
import CardAnimal from '../components/CardAnimal.vue';
export default {
    // des données privées pour dynamiser le composant
    data() {
        return {
        }
    },
    // components permet de déclarer les composants enfants
    components: {
        CardAnimal
    }
}
</script>