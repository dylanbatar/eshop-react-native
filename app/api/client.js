import { create } from 'apisauce';
import netInfo from '@react-native-community/netinfo';
import Cache from '../store/cacheStore';
import secureStore from '../store/secureStore';

const apiLayer = create({
  baseURL: 'http://192.168.1.6:9000/api',
});

apiLayer.addAsyncRequestTransform(async (request) => {
  request.headers['x-auth-token'] = await secureStore.getToken();
});

const get = apiLayer.get;

apiLayer.get = async (url, params, axiosConfig) => {
  const network = await netInfo.fetch();
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    Cache.set(url, response.data);
    return response;
  }

  if (network.type !== 'wifi' && network.isInternetReachable === false) {
    const data = await Cache.get(url);
    return data ? { ok: true, data } : response;
  }
};

export default apiLayer;
