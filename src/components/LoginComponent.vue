<template>
  <div>
    <h1>Login</h1>
    <hr />
    <form v-on:submit.prevent="hacerLogin()">
      <label>userName: </label>
      <input type="text" v-model="login.userName" class="form-control" />
      <br />
      <label>password: </label>
      <input type="password" v-model="login.password" class="form-control" />
      <br />
      <button class="btn btn-info">Login</button>
    </form>
  </div>
</template>

<script>
import Global from "@/Global";
import ServiceAlumno from "@/services/ServiceAlumno";
const service = new ServiceAlumno();

export default {
  name: "LoginComponent",
  data() {
    return {
      login: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    hacerLogin() {
      service
        .login(this.login)
        .then((result) => {
          Global.token = result.data.response;
          console.log(Global.token);
          this.$router.push("/crear");
        })
        .catch(() => {
          alert("Usuario o contraseña incorrectos");
        });
    },
  },
};
</script>

<style></style>
