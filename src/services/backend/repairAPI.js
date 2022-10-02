import frontendHeader from "../frontend/FrontendHeaderService.js";

// Method Read All Repair
const getAllRepair = async () => {
  return await frontendHeader.get(`repair`);
};

//Method Read Repair By ID
const getRepairById = async (id) => {
  return await frontendHeader.get(`repair/${id}`);
};

//Method Read Repair By ID
const getRepairByIdSale = async (id) => {
  return await frontendHeader.get(`repair/sale/${id}`);
};

//Method Create
const createNewRepair = async (data) => {
  return await frontendHeader.post(`repair`, data);
};

//Method Update Repair
const patchRepair = async (id, data) => {
  return await frontendHeader.patch(`repair/${id}`, data);
};

//Method Delete Repair
const deleteRepair = async (id) => {
  return await frontendHeader.delete(`repair/${id}`);
};

const api = {
  getAllRepair,
  getRepairById,
  getRepairByIdSale,
  createNewRepair,
  patchRepair,
  deleteRepair,
};

export default api;
