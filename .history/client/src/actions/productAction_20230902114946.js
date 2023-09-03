import axios from "axios";
import {ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, CLEAR_ERRORS} from '../constants/productConstants'

export const getProduct = () => async (dispatch) => {
    try{
        dispatch({
            type:ALL_PRODUCTS_REQUEST
        })
        const {data} = await axios.get('/api/v1/products');
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data,
        }) 
    }
    catch{
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
//clearing Errors 
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS  })
}