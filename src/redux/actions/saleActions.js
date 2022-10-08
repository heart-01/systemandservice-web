import api from "../../services/backend/saleAPI.js";
import showMsg from "../../utils/AlertMessage";

// Actions
export const LOAD_SALE_All_SUCCESS = "LOAD_SALE_All_SUCCESS";
export const LOAD_SALE_BY_ID_SUCCESS = "LOAD_SALE_BY_ID_SUCCESS";
export const CREATE_SALE_SUCCESS = "CREATE_SALE_SUCCESS";
export const PATCH_SALE_SUCCESS = "PATCH_SALE_SUCCESS";
export const DELETE_SALE_BY_ID_SUCCESS = "DELETE_SALE_BY_ID_SUCCESS";
export const CLEAR_STATE_SALE = "CLEAR_STATE_SALE";
export const SALE_FAILED = "SALE_FAILED";

// Action Creators
export const loadSaleAllSuccess = (data) => {
  return {
    type: LOAD_SALE_All_SUCCESS,
    data,
  };
};
export const loadSaleByIdSuccess = (data) => {
  return {
    type: LOAD_SALE_BY_ID_SUCCESS,
    data,
  };
};
export const createSaleSuccess = (data) => {
  return {
    type: CREATE_SALE_SUCCESS,
    data,
  };
};
export const patchSaleSuccess = (data) => {
  return {
    type: PATCH_SALE_SUCCESS,
    data,
  };
};
export const deleteSaleByIdSuccess = (data) => {
  return {
    type: DELETE_SALE_BY_ID_SUCCESS,
    data,
  };
};
export const clearStateSale = () => {
  return {
    type: CLEAR_STATE_SALE,
  };
};
export const callApiSaleFailed = (error) => {
  return {
    type: SALE_FAILED,
    error,
  };
};

// Methods Call Action Creators
export const loadSaleAll = () => {
  return (dispatch) => {
    api
      .getAllSale()
      .then((response) => {
        dispatch(loadSaleAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiSaleFailed(error));
      });
  };
};
export const loadSaleAllByCustomerId = (id) => {
  return (dispatch) => {
    api
      .getAllSaleByCustomerId(id)
      .then((response) => {
        dispatch(loadSaleAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiSaleFailed(error));
      });
  };
};
export const loadSaleById = (id) => {
  return (dispatch) => {
    api
      .getSaleById(id)
      .then((response) => {
        dispatch(loadSaleByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiSaleFailed(error));
      });
  };
};
export const createSale = (data) => {
  return (dispatch) => {
    api
      .createNewSale(data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(createSaleSuccess(response.data.success));
      })
      .catch((error) => {
        dispatch(callApiSaleFailed(error));
      });
  };
};
export const patchSale = (id, data) => {
  return (dispatch) => {
    api
      .patchSale(id, data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(patchSaleSuccess(response.data));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(callApiSaleFailed(error));
      });
  };
};
export const deleteSale = (id) => {
  return (dispatch) => {
    api
      .deleteSale(id)
      .then((response) => {
        dispatch(deleteSaleByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiSaleFailed(error));
      });
  };
};
