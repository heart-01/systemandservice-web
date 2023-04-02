import http from "./FrontendHeaderService.js";

// Method Read All Contact
const getAllContact = async () => {
  return await http.get(`contact`);
};

//Method Read Contact By ID
const getContactById = async (id) => {
  return await http.get(`contact/${id}`);
};

//Method Add New Contact
const createNewContact = async (data) => {
  return await http.post(`contact`, data);
};

//Method Delete Contact
const deleteContact = async (id) => {
  return await http.delete(`contact/${id}`);
};

const api = {
  getAllContact,
  getContactById,
  createNewContact,
  deleteContact
};

export default api;
