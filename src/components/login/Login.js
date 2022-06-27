import FormModal from "../../styledComponents/FormModal.styled";
import "./Login.scss";

const Login = ({ setLogin }) => {
  const handleClick = (e) => {
    if (e.target.className.includes("Login-component")) setLogin(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("active");
  };

  return (
    <FormModal onMouseDown={handleClick} className="Login-component">
      <main>
        <h2>Log In</h2>
        <form>
          <input
            name="email"
            placeholder="email"
            type="text"
            onChange={handleChange}
          />

          <input
            name="password"
            placeholder="password"
            type="password"
            onChange={handleChange}
          />

          <button type="submit" onClick={handleSubmit}>
            Enter
          </button>
        </form>
      </main>
    </FormModal>
  );
};

export default Login;
