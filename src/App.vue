<template>
<div>
  <Header></Header>
  <AddAnimal></AddAnimal>
  <Footer></Footer>
</div>
</template>

<script>
    import Header from './components/Header.vue';
    import Home from './components/Home.vue';
    import Modification from './components/Modification.vue';
    import LostPassword from './components/LostPassword.vue';
    import NotFound from './components/NotFound.vue';
    import Subscribe from './components/Subscribe.vue';
    import Connexion from './components/Connexion.vue';
    import Category from './components/Category.vue';
    import CardAnimal from './components/CardAnimal.vue';
    import CardPetAlert from './components/CardPetAlert.vue';
    import Alert from './components/Alert.vue';
    import AddAnimal from './components/AddAnimal.vue';
    import Account from './components/Account.vue';
    import About from './components/About.vue';
    import Policy from './components/Policy.vue';
    import Footer from './components/Footer.vue';
    
  export default {
      components: {
        Header,
        Home,
        Modification,
        LostPassword,
        NotFound,
        Policy,
        Subscribe,
        Connexion,
        Category,
        CardPetAlert,
        CardAnimal,
        AddAnimal,
        Alert,
        Account,
        About,
        Footer,
      }
  };
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>