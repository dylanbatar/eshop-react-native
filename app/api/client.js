import { create } from 'apisauce';

const apiLayer = create({
  baseURL: 'http://192.168.1.8:9000/api',
});

export default apiLayer;
