<template>
  <div>
    <h1>Modificar alumno</h1>
    <hr />
    <form v-on:submit.prevent="updateAlumno()">
      <label for="">Id alumno: </label><br />
      <input type="number" v-model="usuario.idAlumno" disabled /><br />
      <label for="">Nombre: </label><br />
      <input type="string" v-model="usuario.nombre" /><br />
      <label for="">Apellidos: </label><br />
      <input type="string" v-model="usuario.apellidos" /><br />
      <label for="">Imagen: </label><br />
      <input type="string" v-model="usuario.imagen" /><br />
      <label for="">Activo: </label><br />
      <input type="number" v-model="usuario.activo" /><br />
      <label for="">Id curso: </label><br />
      <input type="number" v-model="usuario.idCurso" /><br />
      <hr />
      <button class="btn btn-success">Modificar</button>
    </form>
  </div>
</template>

<script>
import ServiceAlumnos from "@/services/ServiceAlumnos";
const service = new ServiceAlumnos();
export default {
  name: "UpdateAlumno",
  data() {
    return {
      usuario: {
        idAlumno: this.$route.params.id,
        nombre: "",
        apellidos: "",
        imagen: "",
        activo: 0,
        idCurso: 0,
      },
    };
  },
  methods: {
    updateAlumno() {
      service.updateAlumno(this.usuario).then((result) => {
        console.log("usuario modificado correctamente" + result);
        this.$router.push("/detalles/" + this.usuario.idAlumno);
      });
    },
  },
};
</script>

<style></style>
