import axios from "axios";

const initialState = {
  username: "",
  id: "",
  profilepic: ""
};

const REGISTER_USER = "REGISTER_USER";
const LOGIN = "LOGIN";

export function registerUser(username, password) {
  return {
    type: REGISTER_USER,
    payload: axios.post("/api/registerUser", { username, password })
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios.post("/api/login", { username, password })
  };
}

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case `${REGISTER_USER}_FULFILLED`:
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data,
        id: action.payload.data
      };
    default:
      return state;
  }
}