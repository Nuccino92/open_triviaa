import HomeButton from "../../styledComponents/HomeButton.styled";
import "./Homepage.scss";

const Homepage = ({ setLogin, setRanked, setCasual }) => {
  const isAuthenticated = true;

  const handleCasual = () => {
    setCasual(true);
  };

  const handleRanked = () => {
    if (!isAuthenticated) return setLogin(true);
    setRanked(true);
  };

  return (
    <div className="Homepage-component" data-testid="homepage">
      <h1>this is the homepage</h1>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga.
      </p>
      <div>
        <HomeButton onClick={handleCasual}>Casual</HomeButton>
        <HomeButton onClick={handleRanked}>Ranked</HomeButton>
      </div>
    </div>
  );
};

export default Homepage;
