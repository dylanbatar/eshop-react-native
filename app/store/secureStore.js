import * as SecureStore from "expo-secure-store";
import jwtDecode from "../utils/decodeJWT";

const PREFIX = "secureStore";

const set = async (key, value) => {
  try {
    const decodeData = jwtDecode.decodeToken(value);
    await SecureStore.setItemAsync(PREFIX + key, JSON.stringify(decodeData));
  } catch (error) {
    console.log("Error on save data", error);
  }
};

const get = async (key) => {
  try {
    const data = await SecureStore.getItemAsync(PREFIX + key);
    return JSON.parse(data);
  } catch (error) {
    console.log("Error on get store", error);
  }
};

const remove = async (key) => {
  try {
    await SecureStore.deleteItemAsync(PREFIX + key);
  } catch (error) {
    console.log("Error on delete data of the store");
  }
};

export default {
  set,
  get,
  remove,
};
