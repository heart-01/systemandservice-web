import { useState, useEffect } from "react";
import http from "../services/frontend/FrontendHeaderService";

const useAPI = (path) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    http
      .get(path)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, setLoading, setData };
};

export default useAPI;
