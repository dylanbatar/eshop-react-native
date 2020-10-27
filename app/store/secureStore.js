import * as SecureStore from 'expo-secure-store';
import jwtDecode from '../utils/decodeJWT';

const PREFIX = 'secureStore';

const set = async (key, value) => {
  try {
    await SecureStore.setItemAsync(PREFIX + key, JSON.stringify(value));
  } catch (error) {
    console.log('Error on save data', error);
  }
};

const get = async (key) => {
  try {
    const data = await SecureStore.getItemAsync(PREFIX + key);
    const decodeData = jwtDecode.decodeToken(JSON.parse(data));
    return decodeData;
  } catch (error) {
    console.log('Error on get store', error);
  }
};

export default {
  set,
  get,
};
