import { useEffect, useState } from 'react';

export default function useAPI(url) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const getAllData = async () => {
    try {
      const res = await fetch(url);
      const resjson = await res.json();
      setData(resjson);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const getOneData = async (id) => {
    try {
      const res = await fetch(`${url}/${id}`);
      const resjson = await res.json();
      setData(resjson);
      setLoading(false);
      return resjson;
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const sendData = async (newData) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      const resjson = await res.json();
      setData((prevData) => ([
        ...prevData,
        resjson,
      ]));
      console.log(resjson);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return {
    isLoading,
    error,
    data,
    getAllData,
    getOneData,
    sendData,
  };
}
