import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifts = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifts(category).then((gifts) => {
        setstate({ data: gifts, loading: false });
    });
  }, [category]);

  return state;
};
