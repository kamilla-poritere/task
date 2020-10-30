import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const userActions = {
  getAll,
  getById,
};

function getAll(page) {
  return (dispatch) => {
    dispatch(request(page));

    userService.getAll(page).then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request(page) {
    return { type: userConstants.GETALL_REQUEST, page };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

function getById(id) {
  return (dispatch) => {
    dispatch(request());

    userService.getById(id).then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GETBYID_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETBYID_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETBYID_FAILURE, error };
  }
}
