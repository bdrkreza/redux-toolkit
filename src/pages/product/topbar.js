import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./product.scss";
export default function TopBar({
  changeSearchTerm,
  searchTerm,
  sortOption,
  setSortItem,
}) {
  let array = sortOption.filter(
    (v, i, a) => a.findIndex((v2) => v2.category === v.category) === i
  );
  console.log(array);
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input
          type="text"
          onChange={changeSearchTerm}
          value={searchTerm}
          placeholder="Search here..."
        />
        <FaSearch />
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <div className="row">
            <div className="selectdiv">
              <label>
                <select onClick={(e) => setSortItem(e.target.value)}>
                  <option selected> Sorted By </option>
                  {array.map((item) => (
                    <option>{item.category}</option>
                  ))}
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
