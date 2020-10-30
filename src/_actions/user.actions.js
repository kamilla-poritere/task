import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const userActions = {
  login,
  logout,
  register,
  getAll,
  getById,
};

function login(email, password, data) {
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password, data).then(
      (user) => {
        dispatch(success(user));
        history.push('/profile')
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

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
