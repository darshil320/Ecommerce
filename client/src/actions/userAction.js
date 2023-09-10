import {
  REGISTER_USER_REQUEST,
  LOGIN_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  CLEAR_ERRORS,
} from "../constants/userConstants";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      config
    );
 
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });

    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clearing Errors 
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS  })
}

//user register
export const register = (userData) => async (dispatch) => {
  try {
     dispatch({ type: REGISTER_USER_REQUEST });

     const config = {
       headers: {
         "Content-Type": "application/json",
       },
     };

     const { data } = await axios.post(
       "/api/v1/register",
       userData,
       config
     );
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: data.user,
      });

    
  } catch (error) {
    dispatch({type: REGISTER_USER_FAIL, payload: error.response.data.message});
  }
};