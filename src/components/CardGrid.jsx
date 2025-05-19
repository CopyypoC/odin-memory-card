import { useEffect, useState } from "react";
import { fetchCards } from "../api/fetchCards.js";

export function CardGrid() {
  const [imgList, setImgsList] = useState([]);
  const cards = imgList.map((item) => {
    return (
      <div className="card-container" key={item.url}>
        <img src={item.url} alt="Game card" width="300" height="300" />
        <p className="artist-name">{"@" + item.artist}</p>
      </div>
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
            artist: item.artist_name,
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
  return <main className="card-grid">{cards}</main>;
}
