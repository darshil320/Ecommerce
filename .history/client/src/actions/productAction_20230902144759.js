import axios from "axios";
import {ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERRORS} from '../constants/productConstants'

export const getProduct = () => async (dispatch) => {
    try{
        dispatch({
            type:ALL_PRODUCT_REQUEST
        })
        

        dispatch({
          type: ALL_PRODUCT_SUCCESS,
          
        }); 
    }catch(error){
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload:error.response.data.message,
        })
    }
}
//clearing Errors 
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS  })
}