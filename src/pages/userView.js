import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdAddBox } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/avatar.svg";
import { deleteUser } from "../redux/userSlice";

export default function UserView() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <div className="wrapper">
      {users?.map(({ id, name, email, phone }) => (
        <div key={id} className="card_wrapper">
          <img src={logo} alt="cookie" />
          <div className="content">
            <header>{name}</header>
            <p>
              email: <span className="email">{email}</span>
            </p>
            <p>
              phone: <span className="phone">{phone}</span>
            </p>
            <p>
              address: <span className="address">address</span>
            </p>
            <div className="buttons">
              <Link to="/add_user" className="add">
                <MdAddBox />
              </Link>

              <Link
                to="/edit_user"
                state={{ id, name, email, phone }}
                className="edit"
              >
                <FiEdit />
              </Link>

              <button onClick={() => handleDelete(id)} className="delete">
                <RiDeleteBack2Line />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
