import GameModal from "../../styledComponents/GameModal.styled";

const Casual = ({ setCasual }) => {
  const handleClick = (e) => {
    if (e.target.className.includes("Casual-component")) setCasual(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("go");
  };

  return (
    <GameModal onMouseDown={handleClick} className="Casual-component">
      <main>
        <h2>Casual Settings</h2>
        <form>
          <label htmlFor="amount">Number of Questions:</label>
          <input
            min={1}
            max={50}
            type="number"
            name="amount"
            defaultValue={1}
          />
          <label htmlFor="category">Select Category:</label>
          <select name="category">
            <option value="" selected disabled hidden>
              Choose here
            </option>
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
          <select name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <label htmlFor="category">Select Type:</label>
          <select name="type">
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
          <button onClick={handleSubmit} type="submit">
            Enter
          </button>
        </form>
      </main>
    </GameModal>
  );
};

export default Casual;
