import axios from 'axios';

let URL = 'https://clone-bhineka.herokuapp.com'

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(URL + '/category')
    }
}

export const getProduct = (id) => {
    if (id == ''){
        URL += `/product`
    }else{
        URL += `/product?category=${id}`
    }
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(URL)
    }
}