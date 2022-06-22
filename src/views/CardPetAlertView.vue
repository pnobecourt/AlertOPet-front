<template> 
        <CardPetAlert></CardPetAlert>        
</template>

<script>
import CardPetAlert from '../components/CardPetAlert.vue';
export default {
    // des données privées pour dynamiser le composant
    data() {
        return {
        }
    },
    // components permet de déclarer les composants enfants
    components: {
        CardPetAlert
    }
}
</script>