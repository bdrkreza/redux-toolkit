import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/productAction";
import Products from "../product/products";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <Products />
    </div>
  );
}
