import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
  const [data] = useState({
    picture: "https://c.tenor.com/NICoVNbKVGYAAAAM/profile-picture.gif",
    username: "JohnCena22",
    email: "johnnyboy@gmail.com",
  });

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
    <div className="Profile-component" data-testid="profile">
      <img src={data.picture} alt="dssd"></img>
      <h2>{data.username}</h2>

      <h4>Top 3 Categories</h4>
      {scores.map((score, index) => {
        return (
          <div key={index}>
            <h5>{score.category}</h5>
            <span>{score.score} / 15 </span>
            <span>{score.time}</span>
          </div>
        );
      })}
      <Link to="/profile/highscores">
        <button>View Scores</button>
      </Link>
    </div>
  );
};
export default Profile;
