import frontendHeader from "../frontend/FrontendHeaderService.js";

// Method Read All Picwork
const getAllPicwork = async () => {
  return await frontendHeader.get(`picwork`);
};

//Method Read Picwork By ID
const getPicworkById = async (id) => {
  return await frontendHeader.get(`picwork/${id}`);
};

//Method Create Picwork
const createNewPicwork = async (data) => {
  return await frontendHeader.post(`picwork`, data);
};

//Method Update Picwork
const patchPicwork = async (id, data) => {
  return await frontendHeader.patch(`picwork/${id}`, data);
};

//Method Delete Picwork
const deletePicwork = async (id) => {
  return await frontendHeader.delete(`picwork/${id}`);
};

// Method Read All AlbumImages
const getAllAlbumImages = async (id) => {
  return await frontendHeader.get(`picwork/albumImages/${id}`);
};

//Method Create AlbumImages
const createAlbumImages = async (id, data) => {
  return await frontendHeader.post(`picwork/albumImages/${id}`, data);
};

//Method Delete AlbumImages
const deleteAlbumImages = async (id) => {
  return await frontendHeader.delete(`picwork/albumImages/${id}`);
};

const api = {
  getAllPicwork,
  getPicworkById,
  createNewPicwork,
  patchPicwork,
  deletePicwork,
  getAllAlbumImages,
  createAlbumImages,
  deleteAlbumImages
};

export default api;
