import requests from "./httpService";

class ProductService {
  getProducts() {
    return requests.get("/products");
  }

  getProductByID(id) {
    return requests.get(`/product/${id}`);
  }

  addProduct(body) {
    return requests.post(`/products`, body);
  }

  updateProduct(id, body) {
    return requests.put(`/products/${id}`, body);
  }

  deleteProduct(id) {
    return requests.delete(`/products/${id}`);
  }
}

export default new ProductService();
