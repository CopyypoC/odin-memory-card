import { useEffect, useState } from "react";
import "../styles/CardGrid.css";

const AMOUNT = 1;

export function CardGrid({ score, setScore }) {
  const [imgList, setImgsList] = useState([]);

  const resetImgList = () => {
    imgList.forEach((item) => (item.clicked = false));
  };

  const handleScore = (e) => {
    const url = e.target.src;

    imgList.forEach((item) => {
      if (item.url === url && item.clicked) {
        setScore(0);
        resetImgList();
        return;
      }

      if (item.url === url && !item.clicked) {
        item.clicked = true;
        setScore(score + 1);
      }
    });
  };

  const cards = imgList.map((item) => {
    return (
      <div className="card-container" key={item.url}>
        <img
          className="card-img"
          src={item.url}
          alt="Game card"
          onClick={handleScore}
        />
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
            url: item.url,
            artist: item.artist_name,
            sourceUrl: item.source_url,
            clicked: false,
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
