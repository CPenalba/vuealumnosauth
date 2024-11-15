<template>
  <div v-if="alumno">
    <h1>Detalles del alumno con nombre: {{ alumno.nombre }}</h1>
    <ul class="list-group">
      <li class="list-group-item">Id alumno: {{ alumno.idAlumno }}</li>
      <li class="list-group-item">Nombre: {{ alumno.nombre }}</li>
      <li class="list-group-item">Apellidos: {{ alumno.apellidos }}</li>
      <li class="list-group-item">
        Imagen: <img :src="alumno.imagen" width="150px" height="150px" />
      </li>
      <li class="list-group-item">Activo: {{ alumno.activo }}</li>
      <li class="list-group-item">Id curso: {{ alumno.idCurso }}</li>
    </ul>
    <br />
    <router-link class="btn btn-danger" to="/alumnos"
      >Volver a la lista de alumnos</router-link
    >
  </div>
</template>

<script>
import ServiceAlumnos from "@/services/ServiceAlumnos";
const service = new ServiceAlumnos();

export default {
  name: "DetallesComponent",
  data() {
    return {
      alumno: null,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    service.findAlumno(id).then((result) => {
      this.alumno = result;
    });
  },
};
</script>

<style></style>
