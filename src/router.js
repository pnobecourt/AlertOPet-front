// on gère la partie routing

// on importe les fonctions de vue router depuis la dépendance vue-router
import { createRouter, createWebHistory } from 'vue-router';

// on récupère les composants à utiliser avec notre router
import HomeView from "./views/HomeView.vue";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import AccountView from "./views/AccountView.vue";
import LostPasswordView from "./views/LostPasswordView.vue";
import AddAnimalView from "./views/AddAnimalView.vue";
import CardAnimalView from "./views/CardAnimalView.vue";
import AlertView from "./views/AlertView.vue";
import CategoryView from "./views/CategoryView.vue";
import CardPetAlertView from "./views/CardPetAlertView.vue";
import AboutView from "./views/AboutView.vue";
import PolicyView from "./views/PolicyView.vue";
import NotFoundView from "./views/NotFoundView.vue";

// on définit des routes. C'est un array qui contient des objets sours la forme {path, component} (on ne choisit pes les noms de propriétés)
// chaque objet est une correspondance entre un chemin et un composant
const routes = [
    { path: '/', component: HomeView, name: "homepage"},
    { path: '/connection', component: LoginView, name: "connection"},
    { path: '/creation-compte', component: RegisterView, name: "creation-compte"},
    { path: '/mon-compte', component: AccountView, name: "mon-compte"},
    { path: '/mon-compte/modification/:ownerId', component: AccountView, name: "mon-compte"},
    { path: '/mot-de-passe-perdu', component: LostPasswordView, name: "mot-de-passe-perdu"},
    { path: '/animal', component: AddAnimalView, name: "animal"},
    { path: '/animal/:petId', component: CardAnimalView, name: "creation-alerte"},
    { path: '/creation-alerte', component: AlertView, name: "creation-alerte"},
    { path: '/category', component: CategoryView, name: "category"},
    { path: '/alerte/:alertId', component: CardPetAlertView, name: "alerte"},
    { path: '/a-propos', component: AboutView, name: "a-propos"},
    { path: '/mentions-legales', component: PolicyView, name: "mentions-legales"},
    { path: '/page-introuvable', component: NotFoundView, name: "page-introuvable"},
]

// on instancie VueRouter avec la fonction createRouter
const router = createRouter({
    // on utilise le mode d'historique "HTML5" => urls classiques ex. /register
    history: createWebHistory(process.env.APP_URL),
    routes, // short for `routes: routes`
});

// on exporte l'instance de VueRouter créée
export default router;