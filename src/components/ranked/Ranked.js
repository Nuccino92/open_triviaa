import { useState } from "react";
import { useDispatch } from "react-redux";
import { startRankedGame } from "../../redux/actions/game";
import GameModal from "../../styledComponents/GameModal.styled";

const Ranked = ({ setRanked }) => {
  const dispatch = useDispatch(null);
  const [selectedCategory, setSelectedCategory] = useState(9);

  const handleClick = (e) => {
    if (e.target.className.includes("Ranked-component"))
      return setRanked(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(startRankedGame(selectedCategory)).then(() => {
      console.log("GO!");
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
          There will be 18 questions evenly distributed between easy, medium and
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
            <option value={13}>Musicals & Theatres</option>
            <option value={14}>Television</option>
            <option value={15}>Video Games</option>
            <option value={16}>Board Games</option>
            <option value={17}>Science & Nature</option>
            <option value={18}>Computers</option>
            <option value={19}>Mathematics</option>
            <option value={20}>Mythology</option>
            <option value={21}>Sports</option>
            <option value={22}>Geography</option>
            <option value={23}>History</option>
            <option value={24}>Politics</option>
            <option value={25}>Art</option>
            <option value={26}>Celebrities</option>
            <option value={27}>Animals</option>
            <option value={28}>Vehicles</option>
            <option value={29}>Comics</option>
            <option value={30}>Gadgets</option>
            <option value={31}>Anime & Manga</option>
            <option value={32}>Cartoon & Animations</option>
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
