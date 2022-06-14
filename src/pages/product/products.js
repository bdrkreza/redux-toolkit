import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteProduct } from "../../redux/productAction";
import { STATUS } from "../../redux/productSlice";
import "./product.scss";
import TopBar from "./topbar";

export default function Products() {
  const dispatch = useDispatch();
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
    <div>
      <TopBar />
      <div className="wrapper">
        {product?.map((item) => (
          <div key={item.id} className="card">
            <div className="imgBox">
              <img
                src={item.image}
                alt="mouse corsair"
                className="product_image"
              />
            </div>

            <div className="contentBox">
              <h3>{item.title}</h3>
              <h2 className="price">
                {item.price}.<small>98</small> €
              </h2>
              <div className="button">
                <Link to="/add_product" className="buy">
                  {/* <h4>add</h4> */}
                  <AiOutlineEye />
                </Link>
                <Link to="/edit_product" state={item} className="buy">
                  {/* <h4>edit</h4> */}
                  <FiEdit />
                </Link>
                <button
                  onClick={() => dispatch(DeleteProduct(item.id))}
                  className="buy"
                >
                  <RiDeleteBack2Line />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
