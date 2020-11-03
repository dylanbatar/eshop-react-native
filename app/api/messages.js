import apiLayer from "./client";

const endPoint = "/messages";

const get = () => apiLayer.get(endPoint);

const send = ({ listingId, message }) =>
  apiLayer.post(endPoint, { listingId, message });

export default {
  get,
  send,
};
