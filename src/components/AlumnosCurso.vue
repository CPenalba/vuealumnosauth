<template>
  <div>
    <h1>Curso: {{ $route.params.id }}</h1>
    <table class="table table-secondary">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Imagen</th>
          <th>Activo</th>
          <th>Id curso</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="alum in alumnos" :key="alum">
          <td>{{ alum.idAlumno }}</td>
          <td>{{ alum.nombre }}</td>
          <td>{{ alum.apellidos }}</td>
          <td><img :src="alum.imagen" width="150px" height="150px" /></td>
          <td>{{ alum.activo }}</td>
          <td>{{ alum.idCurso }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCursos from "@/services/ServiceCursos";
const service = new ServiceCursos();
export default {
  name: "AlumnosCurso",
  data() {
    return {
      alumnos: [],
      idcurso: this.$route.params.id,
    };
  },
  mounted() {
    this.loadAlumnosCurso(this.idcurso);
  },

  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.idcurso = nextVal;
        this.loadAlumnosCurso(this.idcurso);
      }
    },
  },
  methods: {
    loadAlumnosCurso(idcurso) {
      service.getAlumnosCurso(idcurso).then((result) => {
        this.alumnos = result.data;
      });
    },
  },
};
</script>

<style></style>
