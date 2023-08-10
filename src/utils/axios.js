import axios from "axios";
import store from "../store";
import { AUTH_LOGOUT } from "../store/actions/auth";
import router from "../router";

const customAxios = axios.create({
  baseURL: "http://localhost:3000/api",
});

customAxios.interceptors.response.use(
  response => {
    if (response.data.statusCode === 401) {
      store.dispatch(AUTH_LOGOUT);
      router.push({
        name: "login",
        query: {
          redirect: router.currentRoute.path,
        },
      });
      return Promise.reject();
    }
    return Promise.resolve(response)
  },
  error => {
    return Promise.reject(error)

  }
);

export default customAxios;