import axios from 'axios';

let URL = 'https://clone-bhineka.herokuapp.com'

export const getProduct = (id) => {
    if (id == ''){
        URL += `/product`
    }else{
        URL += `/product?category=${id}`
    }
    return {
        type: 'GET_PRODUCT',
        payload: axios.get(URL)
    }
}