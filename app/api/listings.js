import apiLayer from './client';

const endPoint = '/listings';

// GET PRODUCTS POSTED
const getListing = () => apiLayer.get(endPoint);

// ADD PRODUCT POST
const addPost = (data) => {
  const form = new FormData();
  form.append('title', data.title);
  form.append('price', data.price);
  form.append('categoryId', data.category.id);

  data.gallery.forEach((image, index) => {
    form.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image.image,
    });
  });

  if (data.location) {
    form.append('location', JSON.stringify(data.location));
  }

  return apiLayer.post(endPoint, form);
};

export default { getListing, addPost };
