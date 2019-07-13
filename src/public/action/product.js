import axios from 'axios';

let URL = 'https://clone-bhineka.herokuapp.com'

export const getProduct = (id) => {
    if (id == ''){
        url = URL+'/product'
    }else{
        url = URL+'/product?category='+id
    }

    console.warn(url)
    return {
        type: 'GET_PRODUCT',
        payload: axios.get(url)
    }
}