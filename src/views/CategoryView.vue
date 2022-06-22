<template> 
        <Category></Category>
</template>

<script>
import Category from '../components/Category.vue';
export default {
    // des données privées pour dynamiser le composant
    data() {
        return {
        }
    },
    // components permet de déclarer les composants enfants
    components: {
        Category
    }
}
</script>