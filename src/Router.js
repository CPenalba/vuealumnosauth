import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import AlumnosComponent from "./components/AlumnosComponent.vue";
import DetallesComponent from "./components/DetallesComponent.vue";
import CrearAlumnoComponent from "./components/CrearAlumnoComponent.vue";
import UpdateComponent from "./components/UpdateComponent.vue";
import DeleteAlumno from "./components/DeleteAlumno.vue";
import AlumnosCurso from "./components/AlumnosCurso.vue";

const myRoutes = [
  { path: "/", component: LoginComponent },
  { path: "/alumnos", component: AlumnosComponent },
  { path: "/detalles/:id", component: DetallesComponent },
  { path: "/crear", component: CrearAlumnoComponent },
  { path: "/update/:id", component: UpdateComponent },
  { path: "/delete/:id", component: DeleteAlumno },
  { path: "/alumnoscurso/:id", component: AlumnosCurso },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
