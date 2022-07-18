import { useState } from "react";
import { useDispatch } from "react-redux";
import { startRankedGame } from "../../redux/actions/game";
import GameModal from "../../styledComponents/GameModal.styled";
import { useNavigate } from "react-router-dom";

const Ranked = ({ setRanked }) => {
  const dispatch = useDispatch(null);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(9);

  const handleClick = (e) => {
    if (e.target.className.includes("Ranked-component"))
      return setRanked(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(startRankedGame(selectedCategory)).then(() => {
      // create navigate callback function to make sure state is state is available to router
      const navigateToGame = () => {
        setRanked(false);
        navigate("/game");
      };
      navigateToGame();
    });
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <GameModal onMouseDown={handleClick} className="Ranked-component">
      <main>
        <h2>Ranked Mode</h2>
        <p>
          There will be 15 questions evenly distributed between easy, medium and
          hard. The goal is to be correct but also fast, if you answer all
          questions correctly the person with the faster time will be ranked
          higher. Good luck.
        </p>
        <form>
          <label htmlFor="category">Select Category:</label>
          <select name="category" onChange={handleChange}>
            <option value={9}>General Knowledge</option>
            <option value={10}>Books</option>
            <option value={11}>Film</option>
            <option value={12}>Music</option>
            <option value={14}>Television</option>
            <option value={15}>Video Games</option>
            <option value={17}>Science & Nature</option>
            <option value={18}>Computers</option>
            <option value={21}>Sports</option>
            <option value={22}>Geography</option>
            <option value={23}>History</option>
            <option value={31}>Anime & Manga</option>
          </select>
          <button type="submit" onClick={handleSubmit}>
            Start
          </button>
        </form>
      </main>
    </GameModal>
  );
};

export default Ranked;
