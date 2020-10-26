import apiLayer from "./client";

const endPoint = "/auth";

const login = (user) => apiLayer.post(endPoint, user);

export default {
  login,
};
