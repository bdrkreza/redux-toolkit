import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../redux/userSlice";
import "./addUser.scss";

export default function EditUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [formValue, setFormValue] = useState(location.state);

  // handle onChange function
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const { name, email, phone } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { id: location.state.id, name, email, phone };
    dispatch(updateUser(formData));
    console.log(formData);
    navigate("/show_user", { replace: true });
  };
  return (
    <div className="add_content">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            defaultValue={location.state.name}
            onChange={onChange}
            type="text"
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
            defaultValue={location.state.email || ""}
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
            defaultValue={location.state.phone}
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
          Update
        </button>
      </form>
    </div>
  );
}
