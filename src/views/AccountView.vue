<template> 
        <Account></Account>        
</template>

<script>
import Account from '../components/Account.vue';
export default {
    // des données privées pour dynamiser le composant
    data() {
        return {
        }
    },
    // components permet de déclarer les composants enfants
    components: {
        Account
    }
}
</script>