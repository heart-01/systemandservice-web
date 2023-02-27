import frontendHeader from "../frontend/FrontendHeaderService.js";

// Method Read All Publicize
const getAllPublicize = async () => {
  return await frontendHeader.get(`publicize`);
};

//Method Read Publicize By ID
const getPublicizeById = async (id) => {
  return await frontendHeader.get(`publicize/${id}`);
};

//Method Create Publicize
const createNewPublicize = async (data) => {
  return await frontendHeader.post(`publicize`, data);
};

//Method Update Publicize
const patchPublicize = async (id, data) => {
  return await frontendHeader.patch(`publicize/${id}`, data);
};

//Method Delete Publicize
const deletePublicize = async (id) => {
  return await frontendHeader.delete(`publicize/${id}`);
};

const api = {
  getAllPublicize,
  getPublicizeById,
  createNewPublicize,
  patchPublicize,
  deletePublicize,
};

export default api;
