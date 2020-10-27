export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_AUTH':
      return { ...state, logged: true, user: action.payload };
    case 'LOGOUT_AUTH':
      return { ...state, logged: false, user: null };
  }
};
