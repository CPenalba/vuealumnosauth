<template>
  <div>
    <h1>Crear alumno</h1>
    <hr />
    <form v-on:submit.prevent="createAlumno()">
      <label>Id alumno: </label><br />
      <input
        type="number"
        v-model="usuario.idAlumno"
        disabled
        class="form-control"
      /><br />
      <label>Nombre: </label><br />
      <input
        type="string"
        v-model="usuario.nombre"
        class="form-control"
      /><br />
      <label>Apellidos: </label><br />
      <input
        type="string"
        v-model="usuario.apellidos"
        class="form-control"
      /><br />
      <label>Imagen: </label><br />
      <input
        type="string"
        v-model="usuario.imagen"
        class="form-control"
      /><br />
      <label>Activo: </label><br />
      <input
        type="number"
        v-model="usuario.activo"
        class="form-control"
      /><br />
      <label>Id curso: </label><br />
      <input
        type="number"
        v-model="usuario.idCurso"
        class="form-control"
      /><br />

      <button class="btn btn-info">Crear alumno</button>
    </form>
  </div>
</template>

<script>
import ServiceAlumnos from "@/services/ServiceAlumnos";
const service = new ServiceAlumnos();

export default {
  name: "CrearAlumno",
  data() {
    return {
      usuario: {
        idAlumno: 0,
        nombre: "",
        apellidos: "",
        imagen: "",
        activo: 0,
        idCurso: 0,
      },
    };
  },
  mounted() {
    if (localStorage.getItem("token") == null) {
      this.$router.push("/");
    }
  },
  methods: {
    createAlumno() {
      service.createAlumno(this.usuario).then((result) => {
        console.log("usuario creado correctamente" + result.data);
        this.$router.push("/alumnos");
      });
    },
  },
};
</script>

<style></style>
