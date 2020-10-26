import jwt_decode from "jwt-decode";

const decodeToken = (token) => {
  const tokenData = jwt_decode(token);
  console.log(tokenData);
  return tokenData;
};

export default {
  decodeToken,
};
