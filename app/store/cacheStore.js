import AsyncStorage from '@react-native-community/async-storage';
import DiffDate from '../utils/diffDate';

const PREFIX = 'cache';

const get = async (key) => {
  try {
    const store = await AsyncStorage.getItem(PREFIX + key);
    const item = JSON.parse(store);
    const diffDate = new DiffDate(Date.now(), item.date);

    if (diffDate.diffMinutes() > 5) {
      return await AsyncStorage.removeItem(PREFIX + key);
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

const set = async (key, value) => {
  try {
    const item = {
      date: Date.now(),
      value,
    };

    await AsyncStorage.setItem(PREFIX + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

export default {
  get,
  set,
};
