import { useState } from "react";

export const useFetch = (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const request = async (...params) => {
    const response = await apiFunc(...params);

    if (!response || !response.ok) {
      setError(true);
      setLoading(false);
      setData([]);
      return;
    }
    setError(false);
    setLoading(false);
    setData(response.data);
  };

  return { data, loading, error, request };
};
