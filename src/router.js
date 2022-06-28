// on gère la partie routing

// on importe les fonctions de vue router depuis la dépendance vue-router
import { createRouter, createWebHistory } from 'vue-router';

// on récupère les composants à utiliser avec notre router
import Home from "./components/Home.vue";
import Connexion from "./components/Connexion.vue";
import Subscribe from "./components/Subscribe.vue";
import Account from "./components/Account.vue";
import LostPassword from "./components/LostPassword.vue";
import AddAnimal from "./components/AddAnimal.vue";
import ListCardAnimal from "./components/ListCardAnimal.vue";
import ModifyAnimal from "./components/ModifyAnimal.vue";
import Modification from "./components/Modification.vue";
import Alert from "./components/Alert.vue";
import CreateAlert from "./components/CreateAlert.vue";
import Category from "./components/Category.vue";
import CardPetAlert from "./components/CardPetAlert.vue";
import About from "./components/About.vue";
import Policy from "./components/Policy.vue";
import NotFound from "./components/NotFound.vue";

// on définit des routes. C'est un array qui contient des objets sours la forme {path, component} (on ne choisit pes les noms de propriétés)
// chaque objet est une correspondance entre un chemin et un composant
const routes = [
    { path: '/', component: Home, name: "accueil"},
    { path: '/connection', component: Connexion, name: "connection"},
    { path: '/creation-compte', component: Subscribe, name: "creation-compte"},
    { path: '/mon-compte', component: Account, name: "mon-compte"},
    { path: '/mon-compte/modification/:ownerId', component: Modification, name: "modification-compte"},
    { path: '/mot-de-passe-perdu', component: LostPassword, name: "mot-de-passe-perdu"},
    { path: '/animal', component: AddAnimal, name: "animal"},
    { path: '/animal/tous-les-animaux', component: ListCardAnimal, name: "tous-les-animaux"},
    { path: '/animal/modification/:petId', component: ModifyAnimal, name: "modification-animal"},
    { path: '/creation-alerte', component: CreateAlert, name: "creation-alerte-pet"},
    { path: '/creation-alerte/:petId', component: Alert, name: "creation-alerte"},
    { path: '/category', component: Category, name: "category"},
    { path: '/alerte/:alertId', component: CardPetAlert, name: "alerte"},
    { path: '/a-propos', component: About, name: "a-propos"},
    { path: '/mentions-legales', component: Policy, name: "mentions-legales"},
    { path: '/:pathMatch(.*)*', component: NotFound , name: "page-introuvable"},
]

// on instancie VueRouter avec la fonction createRouter
const router = createRouter({
    // on utilise le mode d'historique "HTML5" => urls classiques ex. /register
    history: createWebHistory(process.env.APP_URL),
    routes, // short for `routes: routes`
});

// on exporte l'instance de VueRouter créée
export default router;