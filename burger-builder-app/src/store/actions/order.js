import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    console.log("Error "+ error)
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData,token) => {
    return (dispatch) => {
        dispatch(purchaseBurgerStart());
        debugger;
        axios.post('/orders.json?auth='+token, orderData)
            .then(res => {
                dispatch(purchaseBurgerSuccess(res.data.name, orderData));
            })
            .catch(err => { dispatch(purchaseBurgerFail(err)) });

        }
    }

export const purchaseInit=()=>{
    return{
        type:actionTypes.PURCHASE_INIT
    } 
}

export const fetchOredersStart =()=>{
    return {
        type:actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrdersSuccess =(orders)=>{
    return {
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders,
       
    }
}   

export const fetchOrderFail =(error)=>{
    return {
        type:actionTypes.FETCH_ORDERS_FAIL,
        error:error,
        
    }
}

export const fetchOrders=(token, userId)=>{
    return dispatch =>{
        dispatch(fetchOredersStart());

        const queryParams = '?auth='+token + '&orderBy="userId"&equalTo="'+userId+'"';
        axios.get('/orders.json'+queryParams)
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        id: key,
                        ...res.data[key]
                    })
                }
                dispatch(fetchOrdersSuccess(fetchedOrders))
                
            }).catch(err => {
                dispatch(fetchOrderFail());
            })
    }
    
}