import { useEffect, useState } from "react";
import "../styles/CardGrid.css";

const AMOUNT = 1;

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
    const controller = new AbortController();

    fetch(`https://nekos.best/api/v2/neko?amount=${AMOUNT}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((json) => {
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
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);
  return <main className="card-grid">{cards}</main>;
}
