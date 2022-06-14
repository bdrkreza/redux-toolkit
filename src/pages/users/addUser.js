import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../redux/userSlice";
import "./addUser.scss";

const initialState = {
  name: "",
  email: "",
  phone: "",
};
export default function AddUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, phone } = formValue;
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  // redux use Selection hook
  const userId = useSelector((state) => state.user.users.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { id: userId + 1, name, email, phone };
    dispatch(addUser(formData));
    navigate("/show_user", { replace: true });
  };
  return (
    <div className="add_content">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            onChange={onChange}
            type="text"
            value={name || ""}
            name="name"
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="group">
          <input
            onChange={onChange}
            value={email || ""}
            type="email"
            name="email"
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>email</label>
        </div>
        <div className="group">
          <input
            onChange={onChange}
            value={phone || ""}
            type="number"
            name="phone"
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>phone</label>
        </div>

        {/* <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>address</label>
        </div> */}
        <Link className="btn_cancel" to="/show_user">
          cancel
        </Link>
        <button className="submit" type="submit">
          AddUser
        </button>
      </form>
    </div>
  );
}
