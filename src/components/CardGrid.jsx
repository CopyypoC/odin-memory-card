import { useEffect, useState } from "react";
import { fetchCards } from "../api/fetchCards.js";

export function CardGrid() {
  const [imgList, setImgsList] = useState([]);
  const cards = imgList.map((item) => {
    return (
      <img
        key={item.url}
        src={item.url}
        alt="Game card"
        width="300"
        height="300"
      />
    );
  });

  useEffect(() => {
    let ignore = false;
    fetchCards().then((json) => {
      if (!ignore) {
        const imgList = json.results.map((item) => {
          return {
            id: item.id,
            url: item.url,
          };
        });

        console.log(json.results);
        setImgsList(imgList);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);
  return <main>{cards}</main>;
}
