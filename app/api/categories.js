import apiLayer from './client';

const endPoint = '/categories';

// GET ALL CATEGORIES
const getCategories = () => apiLayer.get(endPoint);

export default {
  getCategories,
};
