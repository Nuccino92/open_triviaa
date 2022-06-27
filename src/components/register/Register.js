import FormModal from "../../styledComponents/FormModal.styled";
import "./Register.scss";

const Register = ({ setRegister }) => {
  const handleClick = (e) => {
    if (e.target.className.includes("Register-component")) setRegister(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormModal onMouseDown={handleClick} className="Register-component">
      <main>
        <h2>Register</h2>
        <form>
          <input name="username" placeholder="Username" type="text" />
          <input name="email" placeholder="email" type="text" />
          <input name="password" placeholder="password" type="password" />
          <input
            name="retype password"
            placeholder="retype password"
            type="password"
          />
          <button type="submit" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </main>
    </FormModal>
  );
};

export default Register;
