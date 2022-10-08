import api from "../../services/backend/customerAPI.js";
import showMsg from "../../utils/AlertMessage";

// Actions
export const LOAD_CUSTOMER_All_SUCCESS = "LOAD_CUSTOMER_All_SUCCESS";
export const LOAD_CUSTOMER_BY_ID_SUCCESS = "LOAD_CUSTOMER_BY_ID_SUCCESS";
export const CREATE_CUSTOMER_SUCCESS = "CREATE_CUSTOMER_SUCCESS";
export const PATCH_CUSTOMER_SUCCESS = "PATCH_CUSTOMER_SUCCESS";
export const DELETE_CUSTOMER_BY_ID_SUCCESS = "DELETE_CUSTOMER_BY_ID_SUCCESS";
export const CLEAR_STATE_CUSTOMER = "CLEAR_STATE_CUSTOMER";
export const CUSTOMER_FAILED = "CUSTOMER_FAILED";

// Action Creators
export const loadCustomerAllSuccess = (data) => {
  return {
    type: LOAD_CUSTOMER_All_SUCCESS,
    data,
  };
};
export const loadCustomerByIdSuccess = (data) => {
  return {
    type: LOAD_CUSTOMER_BY_ID_SUCCESS,
    data,
  };
};
export const createCustomerSuccess = (data) => {
  return {
    type: CREATE_CUSTOMER_SUCCESS,
    data,
  };
};
export const patchCustomerSuccess = (data) => {
  return {
    type: PATCH_CUSTOMER_SUCCESS,
    data,
  };
};
export const deleteCustomerByIdSuccess = (data) => {
  return {
    type: DELETE_CUSTOMER_BY_ID_SUCCESS,
    data,
  };
};
export const clearStateCustomer = () => {
  return {
    type: CLEAR_STATE_CUSTOMER,
  };
};
export const callApiCustomerFailed = (error) => {
  return {
    type: CUSTOMER_FAILED,
    error,
  };
};

// Methods Call Action Creators
export const loadCustomerAll = () => {
  return (dispatch) => {
    api
      .getAllCustomer()
      .then((response) => {
        dispatch(loadCustomerAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiCustomerFailed(error));
      });
  };
};
export const loadCustomerById = (id) => {
  return (dispatch) => {
    api
      .getCustomerById(id)
      .then((response) => {
        dispatch(loadCustomerByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiCustomerFailed(error));
      });
  };
};
export const createCustomer = (data) => {
  return (dispatch) => {
    api
      .createNewCustomer(data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(createCustomerSuccess(response.data.success));
      })
      .catch((error) => {
        dispatch(callApiCustomerFailed(error));
      });
  };
};
export const patchCustomer = (id, data) => {
  return (dispatch) => {
    api
      .patchCustomer(id, data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(patchCustomerSuccess(response.data));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(callApiCustomerFailed(error));
      });
  };
};
export const deleteCustomer = (id) => {
  return (dispatch) => {
    api
      .deleteCustomer(id)
      .then((response) => {
        dispatch(deleteCustomerByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiCustomerFailed(error));
      });
  };
};
