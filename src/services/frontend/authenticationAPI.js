import frontendHeader from "./FrontendHeaderService.js";
import backendHeader from "../backend/BackendHeaderService.js";

// Method Read All Account
const getAllAccount = async (query) => {
  return await backendHeader.get(`account?${query}`);
};

//Method Read Account By ID
const getAccountById = async (id) => {
  return await backendHeader.get(`account/${id}`);
};

//Method Login
const loginAccount = async (data) => {
  return await frontendHeader.post(`account/login`, data);
};

//Method Register
const registerAccount = async (data) => {
  return await backendHeader.post(`account/register`, data);
};

//Method ProfileInfo
const profileInfoAccount = async () => {
  return await backendHeader.get(`account/info`);
};

//Method Update Account
const patchAccount = async (id, data) => {
  return await frontendHeader.patch(`account/${id}`, data);
};

//Method Delete Account
const deleteAccount = async (id) => {
  return await frontendHeader.delete(`account/${id}`);
};

const api = {
  getAllAccount,
  getAccountById,
  loginAccount,
  registerAccount,
  profileInfoAccount,
  patchAccount,
  deleteAccount,
};

export default api;
