import apiLayer from "./client";

const endPoint = "/users";

const register = ({ name, email, password }) =>
  apiLayer.post(endPoint, { name, email, password });

export default {
  register,
};
