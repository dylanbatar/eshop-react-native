import jwt_decode from 'jwt-decode';

const decodeToken = (token) => {
  try {
    const tokenData = jwt_decode(token);
    return tokenData;
  } catch (error) {
    return null;
  }
};

export default {
  decodeToken,
};
