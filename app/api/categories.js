import apiLayer from "./client";

const endPoint = "/categories";

// GET ALL CATEGORIES
const getCategories = () => apiLayer.get(endPoint, { cacheKey: "categories" });

export default {
  getCategories,
};
