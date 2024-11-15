<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <hr />
    <form v-on:submit.prevent="login()">
      <label>UserName: </label>
      <br />
      <input type="text" v-model="usuario.userName" />
      <br />
      <label>Password: </label>
      <br />
      <input type="password" v-model="usuario.password" />
      <hr />
      <button class="btn btn-dark">Login</button>
    </form>
  </div>
</template>

<script>
import ServiceAlumnos from "@/services/ServiceAlumnos";
const service = new ServiceAlumnos();

export default {
  name: "LoginComponent",
  data() {
    return {
      usuario: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      service.login(this.usuario).then((result) => {
        const token = result.data.response;
        localStorage.setItem("token", token);
        this.$root.checkSession();
        this.$router.push("/alumnos");
      });
    },
  },
};
</script>

<style></style>
