import { useState } from "react";
import { Link } from "react-router-dom";
import EditProfile from "../../components/editProfile/EditProfile";
import "./Profile.scss";

const Profile = () => {
  const [editModal, setEditModal] = useState(false);

  const [data] = useState({
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

  const handleClick = (e) => {
    if (e.target.className.includes("EditProfile-component"))
      setEditModal(false);
  };

  return (
    <div
      onMouseDown={handleClick}
      className="Profile-component"
      data-testid="profile"
    >
      <div className="user-profile-container">
        <h2>{data.username}</h2>
        <button onClick={() => setEditModal(true)} className="edit-profile">
          Edit Profile
        </button>
      </div>
      <div className="top-3-games-container">
        <h4>Top 3 Games</h4>
        <div className="top-3-games">
          {scores.map((score, index) => {
            return (
              <div key={index}>
                <h5>Category: {score.category}</h5>
                <span>{score.score} / 15 </span>
                <span>{score.time}</span>
                <Link to="/game/gamelog">Game Log</Link>
              </div>
            );
          })}
        </div>
        <Link to="/profile/highscores">
          <button>Game History</button>
        </Link>
      </div>
      {editModal && <EditProfile />}
    </div>
  );
};
export default Profile;
