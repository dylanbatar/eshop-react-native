import apiLayer from "./client";

const endPoint = "/expoPushToken";

const register = (pushToken) => apiLayer.post(endPoint, { token: pushToken });

export default {
  register,
};
