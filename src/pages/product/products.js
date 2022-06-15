/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteProduct, FilterProduct } from "../../redux/productAction";
import { searchByName, STATUS } from "../../redux/productSlice";
import "./product.scss";
import TopBar from "./topbar";
import ViewProduct from "./viewProduct";

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortItem, setSortItem] = useState("");
  const [showLess, setShowLess] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchByName(searchTerm));
    dispatch(FilterProduct(sortItem));
  }, [searchTerm, dispatch, sortItem]);

  const {
    data: sortOption,
    filteredProducts: product,
    status,
    isError,
  } = useSelector((state) => state.products);

  if (isError) {
    return <div className="container">{isError.message}</div>;
  }

  if (status === STATUS.PENDING) {
    return <div className="container">....Loading</div>;
  }

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <TopBar
        changeSearchTerm={changeSearchTerm}
        searchTerm={searchTerm}
        sortOption={sortOption}
        setSortItem={setSortItem}
      />
      <div className="wrapper">
        {product.length === 0 ? (
          <div className="error">no data found</div>
        ) : (
          product?.map((item) => {
            if (item.title.length < 0) {
              return <p>{item.title}</p>;
            }
            return (
              <div key={item.id} className="card">
                <div className="imgBox">
                  <img
                    src={item.image}
                    alt="mouse corsair"
                    className="product_image"
                  />
                </div>

                <div className="contentBox">
                  <h3>
                    {showLess ? `${item.title.slice(0, 30)}...` : item.title}
                  </h3>
                  <a
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => setShowLess(!showLess)}
                  >
                    &nbsp;View {showLess ? "More" : "Less"}
                  </a>
                  <h2 className="price">
                    {item.price}.<small>98</small> €
                  </h2>
                  <div className="button">
                    <Link
                      to="#"
                      onClick={() => setIsOpen(true)}
                      state={item}
                      className="buy"
                    >
                      {/* <h4>add</h4> */}
                      <AiOutlineEye />
                    </Link>

                    {isOpen && <ViewProduct setIsOpen={setIsOpen} />}
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
            );
          })
        )}
      </div>
    </div>
  );
}
