<template> 
        <LostPassword></LostPassword>        
</template>

<script>
import LostPassword from '../components/LostPassword.vue';
export default {
    // des données privées pour dynamiser le composant
    data() {
        return {
        }
    },
    // components permet de déclarer les composants enfants
    components: {
        LostPassword
    }
}
</script>