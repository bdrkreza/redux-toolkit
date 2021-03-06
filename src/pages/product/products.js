import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { STATUS } from "../../redux/productSlice";
import "./product.scss";

export default function Products() {
  const {
    data: product,
    status,
    isError,
  } = useSelector((state) => state.products);

  if (isError) {
    return <div className="container">{isError.message}</div>;
  }

  if (status === STATUS.PENDING) {
    return <div className="container">....Loading</div>;
  }

  return (
    <div className="wrapper">
      {product?.map((item) => (
        <div key={item.id} className="card">
          <div className="imgBox">
            <img
              src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png"
              alt="mouse corsair"
              className="product_image"
            />
          </div>

          <div className="contentBox">
            <h3>Mouse Corsair M65</h3>
            <h2 className="price">
              61.<small>98</small> €
            </h2>
            <div className="button">
              <Link to="/add_product" className="buy">
                {/* <h4>add</h4> */}
                <AiOutlineEye />
              </Link>
              <Link to="/edit_product" className="buy">
                {/* <h4>edit</h4> */}
                <FiEdit />
              </Link>
              <button className="buy">
                <RiDeleteBack2Line />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
