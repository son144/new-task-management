import axios from 'axios';
import { useEffect, useState } from 'react';

export default () => {
  const [auth, setAuth] = useState();

  const verifyAuth = async () => {
    try {
      // ${process.env.REACT_APP_API_URL}
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/users/current-user`);
      // console.log(res,"sauth");
      return res.data;
    } catch (err) {
      // console.log(err);
      return false;
    }
  };

  useEffect(() => {
    (
      async () => {
        const data = await verifyAuth();
        setAuth(data);
      }
    )();
  }, []);

  return { auth };
};
