<template>
  <div>
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-danger"
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand">Alumnos</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <router-link class="nav-link active" to="/">Login</router-link>
            </li>
            <li className="nav-item">
              <router-link class="nav-link active" to="/crear"
                >Crear alumno</router-link
              >
            </li>
            <li className="nav-item">
              <router-link class="nav-link active" to="/subordinados"
                >Modificar alumno</router-link
              >
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Cursos</a
              >
              <ul class="dropdown-menu" v-if="token && cursos.length > 0">
                <li v-for="curso in cursos" :key="curso.id">
                  <a class="dropdown-item" href="#">{{ curso }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Global from "@/Global";
import ServiceAlumno from "@/services/ServiceAlumno";
const service = new ServiceAlumno();

export default {
  name: "MenuComponent",
  data() {
    return {
      cursos: [],
      token: Global.token,
    };
  },
  mounted() {
    if (this.token) {
      service
        .getCursos()
        .then((result) => {
          this.cursos = result.data;
          console.log(this.cursos);
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
        });
    }
  },
};
</script>

<style></style>
