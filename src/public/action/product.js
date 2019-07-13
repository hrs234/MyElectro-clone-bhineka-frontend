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

export const search = (s) => {
    return {
        type: 'SEARCH_PRODUCT',
        payload: axios.get(URL + `/search?search=${s}`)
    }
}