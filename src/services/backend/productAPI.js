import frontendHeader from "../frontend/FrontendHeaderService.js";

// Method Read All Product
const getAllProduct = async () => {
  return await frontendHeader.get(`product`);
};

//Method Read Product By ID
const getProductById = async (id) => {
  return await frontendHeader.get(`product/${id}`);
};

//Method Create
const createNewProduct = async (data) => {
  return await frontendHeader.post(`product`, data);
};

//Method Update Decrement Product
const decrementProduct = async (id, data) => {
  return await frontendHeader.patch(`product/decrement/${id}`, data);
};

//Method Update Product
const patchProduct = async (id, data) => {
  return await frontendHeader.patch(`product/${id}`, data);
};

//Method Delete Product
const deleteProduct = async (id) => {
  return await frontendHeader.delete(`product/${id}`);
};

const api = {
  getAllProduct,
  getProductById,
  createNewProduct,
  decrementProduct,
  patchProduct,
  deleteProduct,
};

export default api;
