import axios from "axios";
import {ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, CLEAR_ERRORS} from '../constants/productConstants'

export const getProduct = () => async (dispatch) => {
    try{
        dispatch({
            type:ALL_PRODUCT_REQUEST
        })
        const { data } = await axios.get('/api/v1/products');
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        }) 
    }
    catch{
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload:Error.response.data.message,
        })
    }
}
//clearing Errors 
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS  })
}