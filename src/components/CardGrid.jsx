import { useEffect, useState } from "react";
import { fetchCards } from "../api/fetchCards.js";
import "../styles/CardGrid.css";

export function CardGrid() {
  const [imgList, setImgsList] = useState([]);
  const cards = imgList.map((item) => {
    return (
      <div className="card-container" key={item.url}>
        <img className="card-img" src={item.url} alt="Game card" />
        <a href={item.sourceUrl} target="_blank">
          <p className="artist-name">{"@" + item.artist}</p>
        </a>
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
            sourceUrl: item.source_url,
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
