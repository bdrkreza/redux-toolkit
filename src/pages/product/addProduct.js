import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/productAction";

const initialState = {
  title: "test product",
  description: "this beautiful man and woman",
  price: "500",
  category: "woman",
  image: "https://i.pravatar.cc",
};
export default function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState(initialState);
  const { title, description, price, category, image } = formValue;
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  // redux use Selection hook
  const productId = useSelector((state) => state.products.data.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: productId + 1,
      title,
      description,
      price,
      category,
      image,
    };
    console.log(formData);
    dispatch(createProduct(formData));
    navigate("/product", { replace: true });
  };
  return (
    <div className="add_content">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            onChange={onChange}
            type="text"
            defaultValue="test product"
            name="title"
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="group">
          <input onChange={onChange} type="number" name="price" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>price</label>
        </div>
        <div className="group">
          <input
            onChange={onChange}
            type="text"
            defaultValue="lorem ipsum set"
            name="description"
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>description</label>
        </div>

        <div className="group">
          <input
            type="text"
            defaultValue="woman"
            name="category"
            onChange={onChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>category</label>
        </div>
        <div className="group">
          <input
            type="text"
            defaultValue="https://i.pravatar.cc"
            name="image"
            onChange={onChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Image</label>
        </div>

        <Link className="btn_cancel" to="/show_user">
          cancel
        </Link>
        <button className="submit" type="submit">
          AddProduct
        </button>
      </form>
    </div>
  );
}
