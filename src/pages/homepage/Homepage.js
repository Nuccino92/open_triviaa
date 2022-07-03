import { useEffect } from "react";
import HomeButton from "../../styledComponents/HomeButton.styled";
import "./Homepage.scss";
import { useDispatch } from "react-redux";
import { RESET_GAME } from "../../redux/actions/types";

const Homepage = ({ setLogin, setRanked, setCasual }) => {
  const dispatch = useDispatch(null);

  const isAuthenticated = true;

  useEffect(() => {
    dispatch({ type: RESET_GAME });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCasual = () => {
    setCasual(true);
  };

  const handleRanked = () => {
    if (!isAuthenticated) return setLogin(true);
    setRanked(true);
  };

  return (
    <div className="Homepage-component" data-testid="homepage">
      <h1>
        <span className="h1-blue">O</span>
        <span className="h1-orange">p</span>
        <span className="h1-pink">e</span>
        <span className="h1-green">n</span>
        &nbsp;
        <span className="h1-blue">T</span>
        <span className="h1-orange">r</span>
        <span className="h1-pink">i</span>
        <span className="h1-green">v</span>
        <span className="h1-blue">i</span>
        <span className="h1-orange">a</span>
        &nbsp;
        <span className="h1-pink">D</span>
        <span className="h1-green">a</span>
        <span className="h1-blue">t</span>
        <span className="h1-orange">a</span>
        <span className="h1-pink">b</span>
        <span className="h1-green">a</span>
        <span className="h1-blue">s</span>
        <span className="h1-orange">e</span>
        &nbsp;Quiz Game
      </h1>
      <p>
        The quiz game was built using the data from the Open Trivia Database.
        Players can create their own quiz with customizable settings and have
        their score and time tracked. Users can also create an account and take
        a crack at ranked mode where they have their scores are recorded for
        each category.
      </p>
      <div>
        <HomeButton onClick={handleCasual}>Casual</HomeButton>
        <HomeButton onClick={handleRanked}>Ranked</HomeButton>
      </div>
    </div>
  );
};

export default Homepage;
