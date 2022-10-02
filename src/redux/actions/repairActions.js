import api from "../../services/backend/repairAPI.js";
import showMsg from "../../utils/AlertMessage";

// Actions
export const LOAD_REPAIR_All_SUCCESS = "LOAD_REPAIR_All_SUCCESS";
export const LOAD_REPAIR_BY_ID_SUCCESS = "LOAD_REPAIR_BY_ID_SUCCESS";
export const CREATE_REPAIR_SUCCESS = "CREATE_REPAIR_SUCCESS";
export const PATCH_REPAIR_SUCCESS = "PATCH_REPAIR_SUCCESS";
export const DELETE_REPAIR_BY_ID_SUCCESS = "DELETE_REPAIR_BY_ID_SUCCESS";
export const CLEAR_STATE_REPAIR = "CLEAR_STATE_REPAIR";
export const REPAIR_FAILED = "REPAIR_FAILED";

// Action Creators
export const loadRepairAllSuccess = (data) => {
  return {
    type: LOAD_REPAIR_All_SUCCESS,
    data,
  };
};
export const loadRepairByIdSuccess = (data) => {
  return {
    type: LOAD_REPAIR_BY_ID_SUCCESS,
    data,
  };
};
export const createRepairSuccess = (data) => {
  return {
    type: CREATE_REPAIR_SUCCESS,
    data,
  };
};
export const patchRepairSuccess = (data) => {
  return {
    type: PATCH_REPAIR_SUCCESS,
    data,
  };
};
export const deleteRepairByIdSuccess = (data) => {
  return {
    type: DELETE_REPAIR_BY_ID_SUCCESS,
    data,
  };
};
export const clearStateRepair = () => {
  return {
    type: CLEAR_STATE_REPAIR,
  };
};
export const callApiRepairFailed = (error) => {
  return {
    type: REPAIR_FAILED,
    error,
  };
};

// Methods Call Action Creators
export const loadRepairAll = () => {
  return (dispatch) => {
    api
      .getAllRepair()
      .then((response) => {
        dispatch(loadRepairAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiRepairFailed(error));
      });
  };
};
export const loadRepairById = (id) => {
  return (dispatch) => {
    api
      .getRepairById(id)
      .then((response) => {
        dispatch(loadRepairByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiRepairFailed(error));
      });
  };
};
export const loadRepairByIdSale = (id) => {
  return (dispatch) => {
    api
      .getRepairByIdSale(id)
      .then((response) => {
        dispatch(loadRepairByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiRepairFailed(error));
      });
  };
};
export const createRepair = (data) => {
  return (dispatch) => {
    api
      .createNewRepair(data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(createRepairSuccess(response.data.success));
      })
      .catch((error) => {
        dispatch(callApiRepairFailed(error));
      });
  };
};
export const patchRepair = (id, data) => {
  return (dispatch) => {
    api
      .patchRepair(id, data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(patchRepairSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiRepairFailed(error));
      });
  };
};
export const deleteRepair = (id) => {
  return (dispatch) => {
    api
      .deleteRepair(id)
      .then((response) => {
        dispatch(deleteRepairByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiRepairFailed(error));
      });
  };
};
