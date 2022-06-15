import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UpdateProduct } from "../../redux/productAction";

export default function EditProduct() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(location.state);
  const { title, description, price, category, image } = formValue;

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: location.state.id,
      title,
      description,
      price,
      category,
      image,
    };
    console.log(formData);
    dispatch(UpdateProduct(location.state.id, formData));
    navigate("/product", { replace: true });
  };

  return (
    <div className="add_content">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            onChange={onChange}
            type="text"
            defaultValue={location.state.title}
            name="title"
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="group">
          <input
            onChange={onChange}
            defaultValue={location.state.price}
            type="number"
            name="price"
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>price</label>
        </div>
        <div className="group">
          <input
            onChange={onChange}
            type="text"
            defaultValue={location.state.description}
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
            defaultValue={location.state.category}
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
            defaultValue={location.state.image}
            name="image"
            onChange={onChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Image</label>
        </div>

        <Link className="btn_cancel" to="/product">
          cancel
        </Link>
        <button className="submit" type="submit">
          updateProduct
        </button>
      </form>
    </div>
  );
}
