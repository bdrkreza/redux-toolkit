import requests from "./httpService";

class ProductService {
  getProducts() {
    return requests.get("/products");
  }

  getProductByID(id) {
    return requests.get(`/product/${id}`);
  }

  addProduct(body) {
    return requests.post(`/product/`, body);
  }

  updateProduct(id, body) {
    return requests.post(`/product/${id}`, body);
  }

  deleteProduct(id) {
    return requests.delete(`/product/${id}`);
  }
}

export default new ProductService();
