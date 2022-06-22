<template> 
        <Add></Add>
</template>

<script>
import Add from '../components/AddAnimal.vue';
export default {
    // des données privées pour dynamiser le composant
    data() {
        return {
        }
    },
    // components permet de déclarer les composants enfants
    components: {
        Add
    }
}
</script>