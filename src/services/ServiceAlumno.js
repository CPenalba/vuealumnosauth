import axios from "axios";
import Global from "./../Global";

export default class ServiceAlumno {
  login(login) {
    return new Promise(function (resolve, reject) {
      let request = "/api/Auth/Login";
      let url = Global.urlApiAlumnos + request;
      axios
        .post(url, login)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}