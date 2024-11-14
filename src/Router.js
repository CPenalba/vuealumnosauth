import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import CrearAlumnoComponent from "./components/CrearAlumnoComponent.vue";

const myRoutes = [
  { path: "/", component: LoginComponent },
  { path: "/crear", component: CrearAlumnoComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
