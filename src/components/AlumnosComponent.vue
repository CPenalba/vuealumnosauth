<template>
  <div>
    <table class="table table-primary">
      <thead>
        <tr>
          <th>Id alumno</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Imagen</th>
          <th>Activo</th>
          <th>Id curso</th>
          <th>Detalles</th>
          <th>Modificar</th>
          <th>Eliminar</th>
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
          <td>
            <router-link class="btn btn-info" :to="'/detalles/' + alum.idAlumno"
              >Detalles</router-link
            >
          </td>
          <td>
            <router-link
              class="btn btn-warning"
              :to="'/update/' + alum.idAlumno"
              >Modificar</router-link
            >
          </td>
          <td>
            <router-link class="btn btn-danger" :to="'/delete/' + alum.idAlumno"
              >Eliminar</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceAlumnos from "@/services/ServiceAlumnos";
const service = new ServiceAlumnos();

export default {
  name: "AlumnosComponent",
  data() {
    return {
      alumnos: [],
    };
  },
  mounted() {
    service.getAlumnos().then((result) => {
      this.alumnos = result.data;
    });
  },
};
</script>

<style></style>
