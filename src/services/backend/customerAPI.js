import frontendHeader from "../frontend/FrontendHeaderService.js";

// Method Read All Customer
const getAllCustomer = async () => {
  return await frontendHeader.get(`customer`);
};

//Method Read Customer By ID
const getCustomerById = async (id) => {
  return await frontendHeader.get(`customer/${id}`);
};

//Method Create
const createNewCustomer = async (data) => {
  return await frontendHeader.post(`customer`, data);
};

//Method Update Customer
const patchCustomer = async (id, data) => {
  return await frontendHeader.patch(`customer/${id}`, data);
};

//Method Delete Customer
const deleteCustomer = async (id) => {
  return await frontendHeader.delete(`customer/${id}`);
};

const api = {
  getAllCustomer,
  getCustomerById,
  createNewCustomer,
  patchCustomer,
  deleteCustomer,
};

export default api;
