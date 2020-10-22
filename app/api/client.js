import { create } from "apisauce";
import netInfo from "@react-native-community/netinfo";
import Cache from "../store/cacheStore";

const apiLayer = create({
  baseURL: "http://192.168.1.8:9000/api",
});

const get = apiLayer.get;

apiLayer.get = async (url, params, axiosConfig) => {
  const network = await netInfo.fetch();
  console.log(network);
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    Cache.set(params.cachekey, { data: response.data, ok: true });
    return response;
  }

  if (network.isConnected) {
    const response = await Cache.get(params.cachekey);
    console.log(response);
    return { ok: true, data: response };
  }
};

export default apiLayer;
