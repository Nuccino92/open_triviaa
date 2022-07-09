import "./HighScores.scss";
import { useState } from "react";

const HighScores = () => {
  const [scores] = useState([
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
    <div className="Highscores-component">
      <h2>Select A Category</h2>
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
    </div>
  );
};

export default HighScores;
