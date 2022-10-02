import api from "../../services/frontend/contactAPI.js";
import showMsg from "../../utils/AlertMessage";

// Actions
export const LOAD_CONTACT_All_SUCCESS = "LOAD_CONTACT_All_SUCCESS";
export const LOAD_CONTACT_BY_ID_SUCCESS = "LOAD_CONTACT_BY_ID_SUCCESS";
export const CREATE_CONTACT_SUCCESS = "CREATE_CONTACT_SUCCESS";
export const CONTACT_FAILED = "CONTACT_FAILED";

// Action Creators
export const loadContactAllSuccess = (data) => {
  return {
    type: LOAD_CONTACT_All_SUCCESS,
    data,
  };
};

export const loadContactByIdSuccess = (data) => {
  return {
    type: LOAD_CONTACT_BY_ID_SUCCESS,
    data,
  };
};

export const createContactSuccess = (data) => {
  return {
    type: CREATE_CONTACT_SUCCESS,
    data,
  };
};

export const callApiContactFailed = (error) => {
  return {
    type: CONTACT_FAILED,
    error,
  };
};

// Methods Call Action Creators
export const loadContactAll = () => {
  return (dispatch) => {
    api
      .getAllContact()
      .then((response) => {
        dispatch(loadContactAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiContactFailed(error));
      });
  };
};

export const loadContactById = (id) => {
  return (dispatch) => {
    api
      .getContactById(id)
      .then((response) => {
        dispatch(loadContactByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiContactFailed(error));
      });
  };
};

export const createContact = (data) => {
  return (dispatch) => {
    api
      .createNewContact(data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(createContactSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiContactFailed(error));
      });
  };
};
