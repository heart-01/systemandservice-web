import frontendHeader from "../frontend/FrontendHeaderService.js";

// Method Read All Sale
const getAllSale = async () => {
  return await frontendHeader.get(`sale`);
};

// Method Read All Sale By Customer ID
const getAllSaleByCustomerId = async (id) => {
  return await frontendHeader.get(`sale/customer/${id}`);
};

//Method Read Sale By ID
const getSaleById = async (id) => {
  return await frontendHeader.get(`sale/${id}`);
};

//Method Create
const createNewSale = async (data) => {
  return await frontendHeader.post(`sale`, data);
};

//Method Update Sale
const patchSale = async (id, data) => {
  return await frontendHeader.patch(`sale/${id}`, data);
};

//Method Delete Sale
const deleteSale = async (id) => {
  return await frontendHeader.delete(`sale/${id}`);
};

const api = {
  getAllSale,
  getAllSaleByCustomerId,
  getSaleById,
  createNewSale,
  patchSale,
  deleteSale,
};

export default api;
