import axios from 'axios'
let URL = "https://clone-bhineka.herokuapp.com";

export const getWishlist = (id) =>{
    console.warn(id)
    return{
        type: 'GET_WISHLIST',
        payload:axios.get(`${URL}/wishlist?id=${id}`)
    }
}