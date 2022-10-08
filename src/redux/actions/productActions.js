import api from "../../services/backend/productAPI.js";
import showMsg from "../../utils/AlertMessage";

// Actions
export const LOAD_PRODUCT_All_SUCCESS = "LOAD_PRODUCT_All_SUCCESS";
export const LOAD_PRODUCT_BY_ID_SUCCESS = "LOAD_PRODUCT_BY_ID_SUCCESS";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const PATCH_PRODUCT_SUCCESS = "PATCH_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_BY_ID_SUCCESS = "DELETE_PRODUCT_BY_ID_SUCCESS";
export const CLEAR_STATE_PRODUCT = "CLEAR_STATE_PRODUCT";
export const PRODUCT_FAILED = "PRODUCT_FAILED";

// Action Creators
export const loadProductAllSuccess = (data) => {
  return {
    type: LOAD_PRODUCT_All_SUCCESS,
    data,
  };
};
export const loadProductByIdSuccess = (data) => {
  return {
    type: LOAD_PRODUCT_BY_ID_SUCCESS,
    data,
  };
};
export const createProductSuccess = (data) => {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    data,
  };
};
export const patchProductSuccess = (data) => {
  return {
    type: PATCH_PRODUCT_SUCCESS,
    data,
  };
};
export const deleteProductByIdSuccess = (data) => {
  return {
    type: DELETE_PRODUCT_BY_ID_SUCCESS,
    data,
  };
};
export const clearStateProduct = () => {
  return {
    type: CLEAR_STATE_PRODUCT,
  };
};
export const callApiProductFailed = (error) => {
  return {
    type: PRODUCT_FAILED,
    error,
  };
};

// Methods Call Action Creators
export const loadProductAll = () => {
  return (dispatch) => {
    api
      .getAllProduct()
      .then((response) => {
        dispatch(loadProductAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiProductFailed(error));
      });
  };
};
export const loadProductById = (id) => {
  return (dispatch) => {
    api
      .getProductById(id)
      .then((response) => {
        dispatch(loadProductByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiProductFailed(error));
      });
  };
};
export const createProduct = (data) => {
  return (dispatch) => {
    api
      .createNewProduct(data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(createProductSuccess(response.data.success));
      })
      .catch((error) => {
        dispatch(callApiProductFailed(error));
      });
  };
};
export const decrementProduct = (id, data) => {
  return (dispatch) => {
    api
      .decrementProduct(id, data)
      .then((response) => {
        dispatch(patchProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiProductFailed(error));
      });
  };
};
export const patchProduct = (id, data) => {
  return (dispatch) => {
    api
      .patchProduct(id, data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(patchProductSuccess(response.data));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(callApiProductFailed(error));
      });
  };
};
export const deleteProduct = (id) => {
  return (dispatch) => {
    api
      .deleteProduct(id)
      .then((response) => {
        dispatch(deleteProductByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiProductFailed(error));
      });
  };
};
