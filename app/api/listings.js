import apiLayer from "./client";

const endPoint = "/listings";

// GET PRODUCTS POSTED
const getListing = () => apiLayer.get(endPoint);

// GET LISTINGS OF THE CURRENT USER
const getMyListings = () => apiLayer.get("/my" + endPoint);

// ADD PRODUCT POST
const addPost = (data, onUploadProgress) => {
  const form = new FormData();
  form.append("title", data.title);
  form.append("price", data.price);
  form.append("categoryId", data.category.id);

  data.gallery.forEach((image, index) => {
    form.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image.image,
    });
  });

  if (data.location) {
    form.append("location", JSON.stringify(data.location));
  }

  return apiLayer.post(endPoint, form, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.total / progress.loaded),
  });
};

export default { getListing, getMyListings, addPost };
