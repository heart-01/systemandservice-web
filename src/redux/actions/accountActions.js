import { isEmpty } from "lodash";
import api from "../../services/frontend/authenticationAPI.js";
import showMsg from "../../utils/AlertMessage";

// Actions
export const LOAD_ACCOUNT_All_SUCCESS = "LOAD_ACCOUNT_All_SUCCESS";
export const LOAD_ACCOUNT_BY_ID_SUCCESS = "LOAD_ACCOUNT_BY_ID_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const CLEAR_STATE_ACCOUNT = "CLEAR_STATE_ACCOUNT";
export const LOAD_ACCOUNT_INFO_SUCCESS = "LOAD_ACCOUNT_INFO_SUCCESS";
export const PATCH_ACCOUNT_SUCCESS = "PATCH_ACCOUNT_SUCCESS";
export const DELETE_ACCOUNT_BY_ID_SUCCESS = "DELETE_ACCOUNT_BY_ID_SUCCESS";
export const ACCOUNT_FAILED = "ACCOUNT_FAILED";

// Action Creators
export const loadAccountAllSuccess = (data) => {
  return {
    type: LOAD_ACCOUNT_All_SUCCESS,
    data,
  };
};
export const loadAccountByIdSuccess = (data) => {
  return {
    type: LOAD_ACCOUNT_BY_ID_SUCCESS,
    data,
  };
};
export const registerAccountSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    data,
  };
};
export const loginAccountSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};
export const patchAccountSuccess = (data) => {
  return {
    type: PATCH_ACCOUNT_SUCCESS,
    data,
  };
};
export const clearStateAccount = () => {
  return {
    type: CLEAR_STATE_ACCOUNT,
  };
};
export const loadAccountInfoSuccess = (data) => {
  return {
    type: LOAD_ACCOUNT_INFO_SUCCESS,
    data,
  };
};
export const deleteAccountByIdSuccess = (data) => {
  return {
    type: DELETE_ACCOUNT_BY_ID_SUCCESS,
    data,
  };
};
export const callApiAccountFailed = (error) => {
  return {
    type: ACCOUNT_FAILED,
    error,
  };
};

// Methods Call Action Creators
export const loadAccountAll = (query = {}, role = "") => {
  let queries = "";
  if (!isEmpty(query.role)) {
    queries = `query=${JSON.stringify(query)}`;
  } else if (!isEmpty(role)) {
    queries = `query=${JSON.stringify(role)}`;
  }

  return (dispatch) => {
    api
      .getAllAccount(queries)
      .then((response) => {
        dispatch(loadAccountAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiAccountFailed(error));
      });
  };
};

export const loadAccountById = (id) => {
  return (dispatch) => {
    api
      .getAccountById(id)
      .then((response) => {
        dispatch(loadAccountByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiAccountFailed(error));
      });
  };
};

export const registerAccount = (data) => {
  return (dispatch) => {
    api
      .registerAccount(data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(registerAccountSuccess(response.data.success));
      })
      .catch((error) => {
        error.response.data.success === false && showMsg.unsuccess({ title: "เกิดข้อผิดพลาด!", text: "ข้อมูล username นี้มีการใช้งานแล้ว" });
        dispatch(callApiAccountFailed(error));
      });
  };
};
export const loginAccount = (data) => {
  return (dispatch) => {
    api
      .loginAccount(data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        response.data.success === true && showMsg.success();
        dispatch(loginAccountSuccess(response.data.success));
      })
      .catch((error) => {
        error.response.status === 401 && showMsg.unsuccess({ title: "เกิดข้อผิดพลาด!", text: "ข้อมูล username หรือ password ไม่ถูกต้อง" });
        dispatch(callApiAccountFailed(error));
      });
  };
};
export const profileInfoAccount = () => {
  return (dispatch) => {
    api
      .profileInfoAccount()
      .then((response) => {
        dispatch(loadAccountInfoSuccess(response.data));
      })
      .catch((error) => {
        error && showMsg.unsuccess({ title: "เกิดข้อผิดพลาด!", text: "ติดต่อผู้ดูแลระบบ" });
        dispatch(callApiAccountFailed(error.response.status));
      });
  };
};

export const patchAccount = (id, data) => {
  return (dispatch) => {
    api
      .patchAccount(id, data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(patchAccountSuccess(response.data));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(callApiAccountFailed(error));
      });
  };
};

export const deleteAccount = (id) => {
  return (dispatch) => {
    api
      .deleteAccount(id)
      .then((response) => {
        dispatch(deleteAccountByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiAccountFailed(error));
      });
  };
};
