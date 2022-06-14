import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./product.scss";
export default function TopBar() {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <FaSearch />
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <div className="row">
            <div className="selectdiv">
              <label>
                <select>
                  <option selected> Sorted By </option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Last long option</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="topnav__right-item">
          {/* dropdown here */}
          <div className="selectdiv">
            <label>
              <select>
                <option selected> Filter Item </option>
                <option>Active</option>
                <option>InActive</option>
              </select>
            </label>
          </div>
        </div>
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Link to="/add_product" className="add">
            <button className="add_btn">addProduct</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
