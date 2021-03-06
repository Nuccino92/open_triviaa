import { useState } from "react";
import GameModal from "../../styledComponents/GameModal.styled";
import { useDispatch } from "react-redux";
import { startCasualGame } from "../../redux/actions/game";
import { useNavigate } from "react-router-dom";

const Casual = ({ setCasual }) => {
  const dispatch = useDispatch(null);
  const navigate = useNavigate(null);

  const [setupInformation, setSetupInformation] = useState({
    amount: 1,
    category: 9,
  });

  const handleClick = (e) => {
    if (e.target.className.includes("Casual-component")) setCasual(false);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setSetupInformation((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startCasualGame(setupInformation)).then(() => {
      // create navigate callback function to make sure state is state is available to router
      const navigateToGame = () => {
        navigate("/game");
        setCasual(false);
      };
      navigateToGame();
    });
  };

  // prevents user from entering custom number of questions
  const preventCustom = () => {
    return;
  };

  return (
    <GameModal onMouseDown={handleClick} className="Casual-component">
      <main>
        <h2>Casual Settings</h2>
        <form>
          <label htmlFor="amount">Number of Questions:</label>
          <input
            onKeyDown={preventCustom}
            min={1}
            max={20}
            type="number"
            name="amount"
            defaultValue={1}
            onChange={handleChange}
          />
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
          <label htmlFor="category">Select difficulty:</label>

          <button onClick={handleSubmit} type="submit">
            Enter
          </button>
        </form>
      </main>
    </GameModal>
  );
};

export default Casual;
