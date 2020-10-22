import AsyncStorage from "@react-native-community/async-storage";

const PREFIX = "cache";

const get = async (key) => {
  try {
    const store = await AsyncStorage.getItem(PREFIX + key);
    return store != null
      ? JSON.parse(store)
      : { ok: false, data: [], loading: false, error: true };
  } catch (error) {
    console.log(error);
  }
};

const set = async (key, value) => {
  try {
    await AsyncStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export default {
  get,
  set,
};
