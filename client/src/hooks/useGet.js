import axios from "axios";
import { useEffect } from "react";

const useGet = ({ url, setFunction }) => {
  axios(url)
    .then(({ data }) => setFunction(data))
    .catch((err) => {
      throw Error(err);
    });
};

export default useGet;
