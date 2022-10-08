import api from "../../services/backend/picworkAPI.js";
import showMsg from "../../utils/AlertMessage";

// Actions
export const LOAD_PICWORK_All_SUCCESS = "LOAD_PICWORK_All_SUCCESS";
export const LOAD_PICWORK_BY_ID_SUCCESS = "LOAD_PICWORK_BY_ID_SUCCESS";
export const CREATE_PICWORK_SUCCESS = "CREATE_PICWORK_SUCCESS";
export const PATCH_PICWORK_SUCCESS = "PATCH_PICWORK_SUCCESS";
export const DELETE_PICWORK_BY_ID_SUCCESS = "DELETE_PICWORK_BY_ID_SUCCESS";
export const CLEAR_STATE_PICWORK = "CLEAR_STATE_PICWORK";
export const LOAD_ALBUMIMAGES_All_SUCCESS = "LOAD_ALBUMIMAGES_All_SUCCESS";
export const CREATE_ALBUMIMAGES_SUCCESS = "CREATE_ALBUMIMAGES_SUCCESS";
export const DELETE_ALBUMIMAGES_BY_ID_SUCCESS = "DELETE_ALBUMIMAGES_BY_ID_SUCCESS";
export const PICWORK_FAILED = "PICWORK_FAILED";

// Action Creators
export const loadPicworkAllSuccess = (data) => {
  return {
    type: LOAD_PICWORK_All_SUCCESS,
    data,
  };
};
export const loadPicworkByIdSuccess = (data) => {
  return {
    type: LOAD_PICWORK_BY_ID_SUCCESS,
    data,
  };
};
export const createPicworkSuccess = (data) => {
  return {
    type: CREATE_PICWORK_SUCCESS,
    data,
  };
};
export const patchPicworkSuccess = (data) => {
  return {
    type: PATCH_PICWORK_SUCCESS,
    data,
  };
};
export const deletePicworkByIdSuccess = (data) => {
  return {
    type: DELETE_PICWORK_BY_ID_SUCCESS,
    data,
  };
};
export const clearStatePicwork = () => {
  return {
    type: CLEAR_STATE_PICWORK,
  };
};
export const loadAlbumImagesAllSuccess = (data) => {
  return {
    type: LOAD_ALBUMIMAGES_All_SUCCESS,
    data,
  };
};
export const createAlbumImagesSuccess = (data) => {
  return {
    type: CREATE_ALBUMIMAGES_SUCCESS,
    data,
  };
};
export const deleteAlbumImagesByIdSuccess = (data) => {
  return {
    type: DELETE_ALBUMIMAGES_BY_ID_SUCCESS,
    data,
  };
};
export const callApiPicworkFailed = (error) => {
  return {
    type: PICWORK_FAILED,
    error,
  };
};

// Methods Call Action Creators
export const loadPicworkAll = () => {
  return (dispatch) => {
    api
      .getAllPicwork()
      .then((response) => {
        dispatch(loadPicworkAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiPicworkFailed(error));
      });
  };
};
export const loadPicworkById = (id) => {
  return (dispatch) => {
    api
      .getPicworkById(id)
      .then((response) => {
        dispatch(loadPicworkByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiPicworkFailed(error));
      });
  };
};
export const createPicwork = (data) => {
  return (dispatch) => {
    api
      .createNewPicwork(data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(createPicworkSuccess(response.data.success));
      })
      .catch((error) => {
        dispatch(callApiPicworkFailed(error));
      });
  };
};
export const patchPicwork = (id, data) => {
  return (dispatch) => {
    api
      .patchPicwork(id, data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(patchPicworkSuccess(response.data));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(callApiPicworkFailed(error));
      });
  };
};
export const deletePicwork = (id) => {
  return (dispatch) => {
    api
      .deletePicwork(id)
      .then((response) => {
        dispatch(deletePicworkByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiPicworkFailed(error));
      });
  };
};
export const loadAlbumImagesAll = (id) => {
  return (dispatch) => {
    api
      .getAllAlbumImages(id)
      .then((response) => {
        dispatch(loadAlbumImagesAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiPicworkFailed(error));
      });
  };
};
export const createAlbumImages = (id, data) => {
  return (dispatch) => {
    api
      .createAlbumImages(id, data)
      .then((response) => {
        response.data.success === true && showMsg.success();
        dispatch(createAlbumImagesSuccess(response.data.success));
      })
      .catch((error) => {
        dispatch(callApiPicworkFailed(error));
      });
  };
};
export const deleteAlbumImages = (id) => {
  return (dispatch) => {
    api
      .deleteAlbumImages(id)
      .then((response) => {
        dispatch(deleteAlbumImagesByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(callApiPicworkFailed(error));
      });
  };
};
