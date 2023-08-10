import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_SUCCESS, GET_USER } from "../actions/auth";
import axios from "../../utils/axios";
import jwtDecode from "jwt-decode";

const state = {
  user: {},
  token: localStorage.getItem("key") || "",
  status: "",
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  user: state => state.user,
};

const actions = {
  [AUTH_LOGIN]: ({ commit }, { username, password }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGIN);
      axios
        .post("/login", {username, password})
        .then(res => {
          console.log(res)
          if (res.data.statusCode === 200 && !res.data.err) {
            let decoded = jwtDecode(res.data.data.token);
            commit(AUTH_SUCCESS, res.data);
            commit(GET_USER, decoded);
            localStorage.setItem("key", res.data.data.token);
            resolve(res);
          } else if (res.data.statusCode === 400) {
            alert("Login failed: ", res.data.error);
            reject(res.data.error)
          }
        })
        .catch(err => {
          commit(AUTH_ERROR);
          reject(err);
        });
    });
  },
  [AUTH_SUCCESS]: () => { },
  [AUTH_ERROR]: () => { },
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise(resolve => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem("key");
      resolve();
    });
  },
  [GET_USER]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      if (getters.isAuthenticated) {
        axios
          .get("/user")
          .then(res => {
            const user = res.data.data;
            commit(GET_USER, user);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      }
      resolve();
    });
  },
};

const mutations = {
  [AUTH_LOGIN]: state => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state, response) => {
    state.status = "success";
    state.token = response.data.token;
  },
  [AUTH_ERROR]: state => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: state => {
    state.token = "";
    state.user = {};
    state.status = "";
  },
  [GET_USER]: (state, user) => {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};