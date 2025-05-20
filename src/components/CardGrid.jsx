import { useEffect, useState } from "react";
import "../styles/CardGrid.css";

const AMOUNT = 12;

export function CardGrid({ score, setScore }) {
  const [imgList, setImgList] = useState([]);

  const resetImgList = () => {
    imgList.forEach((item) => (item.clicked = false));
  };

  const randomizeImgList = () => {
    const randomizedList = [...imgList];

    for (let i = randomizedList.length - 1; i > 0; i--) {
      const swapIndex = Math.floor(Math.random() * i);
      [randomizedList[i], randomizedList[swapIndex]] = [
        randomizedList[swapIndex],
        randomizedList[i],
      ];
    }

    setImgList(randomizedList);
  };

  const handleScore = (e) => {
    const url = e.target.src;

    imgList.forEach((item) => {
      if (item.url === url && item.clicked) {
        setScore(0);
        resetImgList();
        randomizeImgList();
        return;
      }

      if (item.url === url && !item.clicked) {
        item.clicked = true;
        setScore(score + 1);
        randomizeImgList();
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
        setImgList(imgList);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);

  return <main className="card-grid">{cards}</main>;
}
