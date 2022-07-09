import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";
import herd from "./herd.jpg";

const Profile = () => {
  const [data] = useState({
    picture: herd,
    username: "JohnCena22",
    email: "johnnyboy@gmail.com",
  });

  const [scores] = useState([
    {
      category: "Sports",
      time: "01:55:24",
      score: 12,
    },
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
  ]);

  return (
    <div className="Profile-component" data-testid="profile">
      <div>
        <img src={data.picture} alt="dssd"></img>
        <h2>{data.username}</h2>
        <Link to="/profile/highscores">
          <button>Game History</button>
        </Link>
        <button>Edit Profile</button>
      </div>
      <div>
        <div className="top-3-games">
          <h4>Top 3 Games</h4>
          {scores.map((score, index) => {
            return (
              <div key={index}>
                <h5>{score.category}</h5>
                <span>{score.score} / 15 </span>
                <span>{score.time}</span>
                <Link to="/game/gamelog">View Game Log</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Profile;
