import React, { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifts";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ category }) => {
  
  const {data:images,loading} = useFetchGifts(category);
  
  //   const [images, setImages] = useState([]);

  //   useEffect(() => {
  //    getGifts(category).then(gifts=>setImages(gifts));
  //   },[category]);
  return (
    <>
      <h3 className="animate__animated animate__headShake">{category}</h3>
      {loading && <p>Loading...</p> }

      <div className="card-grid">
             {
                 images.map(img => (
                    <GiftGridItem key={img.id} {...img} />
                 ))
             }
      
        </div>
    </>
  );
};
