import "./Leaderboards.scss";
import { Link } from "react-router-dom";

const Leaderboards = () => {
  return (
    <div className="Leaderboards-component">
      <h2>Select A Category</h2>
      <ul>
        <Link to="/leaderboards/General Knowledge">General Knowledge</Link>
        <Link to="/leaderboards/Books">Books</Link>
        <Link to="/leaderboards/Film">Film</Link>
        <Link to="/leaderboards/Music">Music</Link>
        <Link to="/leaderboards/Television">Television</Link>
        <Link to="/leaderboards/Video Games">Video Games</Link>
        <Link to="/leaderboards/Science & Nature">Science & Nature</Link>
        <Link to="/leaderboards/Computers">Computers</Link>
        <Link to="/leaderboards/Sports">Sports</Link>
        <Link to="/leaderboards/Geography">Geography</Link>
        <Link to="/leaderboards/History">History</Link>
        <Link to="/leaderboards/Anime & Manga">Anime & Manga</Link>
      </ul>
    </div>
  );
};

export default Leaderboards;
