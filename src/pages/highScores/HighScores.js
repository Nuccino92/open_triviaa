import { useState } from "react";

const HighScores = () => {
  const [scores, setScores] = useState([
    {
      category: "General Knowledge",
      time: "03:07:38",
      score: 9,
    },
    {
      category: "Anime & Manga",
      time: "02:27:78",
      score: 7,
    },
    {
      category: "Sports",
      time: "01:55:24",
      score: 12,
    },
  ]);

  return (
    <div>
      <ul>
        <li>General Knowledge</li>
        <li>Books</li>
        <li>Film</li>
        <li>Music</li>
        <li>Television</li>
        <li>Video Games</li>
        <li>Science & Nature</li>
        <li>Computers</li>
        <li>Sports</li>
        <li>Geography</li>
        <li>History</li>
        <li>Anime & Manga</li>
      </ul>
      <div>
        <h4>Top 10 Scores</h4>
        {scores.map((score) => {
          return (
            <div>
              <h6>{score.category}</h6>
              <span>{score.score} / 15 </span>
              <span>{score.time}</span>
              <button>View Game Log</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighScores;
