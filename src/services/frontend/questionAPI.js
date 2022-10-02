import http from "./FrontendHeaderService.js";

// Method Read All Question
const getAllQuestion = async (query) => {
  return await http.get(`question?${query}`);
};

//Method Read Question By ID
const getQuestionById = async (id) => {
  return await http.get(`question/${id}`);
};

//Method Add New Question
const createNewQuestion = async (data) => {
  return await http.post(`question`, data);
};

//Method Update Question
const patchQuestion = async (id, data) => {
  return await http.patch(`question/${id}`, data);
};

//Method Delete Question
const deleteQuestion = async (id) => {
  return await http.delete(`question/${id}`);
};

//Method Read Comment By Question ID
const getCommentByQuestionId = async (questionId) => {
  return await http.get(`question/comment/${questionId}`);
};

//Method Add New Comment
const createNewComment = async (data) => {
  return await http.post(`question/comment`, data);
};

const api = {
  getAllQuestion,
  getQuestionById,
  createNewQuestion,
  patchQuestion,
  deleteQuestion,
  getCommentByQuestionId,
  createNewComment,
};

export default api;