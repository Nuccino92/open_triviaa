import { useState } from "react";
import FormModal from "../../styledComponents/FormModal.styled";

const EditProfile = () => {
  const [data] = useState({
    username: "JohnCena22",
    email: "johnnyboy@gmail.com",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormModal className="EditProfile-component">
      <main>
        <h2>Edit Profile</h2>
        <form>
          <input name="username" value={data.username} />
          <input name="email" value={data.email} />
          <input name="password" placeholder="password" />
          <input name="retype password" placeholder="retype password" />
          <button type="submit" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </main>
    </FormModal>
  );
};

export default EditProfile;
