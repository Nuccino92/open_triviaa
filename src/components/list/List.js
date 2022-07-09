import "./List.scss";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const List = () => {
  const { category } = useParams();

  const [scores] = useState([
    {
      user: "Jimmy69",
      category: "General Knowledge",
      time: "03:07:38",
      score: 9,
    },
    {
      user: "Jezus",
      category: "General Knowledge",
      time: "02:37:38",
      score: 8,
    },
    {
      user: "Michael Jackson",
      category: "General Knowledge",
      time: "02:37:38",
      score: 6,
    },
    {
      user: "ILikeCheese48",
      category: "Anime & Manga",
      time: "02:27:78",
      score: 7,
    },
    {
      user: "TomBrady",
      category: "Sports",
      time: "01:55:24",
      score: 12,
    },
  ]);

  return (
    <div className="List-component">
      <h2>{category}</h2>
      {scores.map((score, index) => {
        return score.category === category ? (
          <div key={index}>
            <h4>
              {index + 1} - {score.user}
            </h4>
            <p>Score: {score.score} / 21</p>
            <p>Time: {score.time}</p>
            <Link to="/game/gamelog">View Log</Link>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default List;
