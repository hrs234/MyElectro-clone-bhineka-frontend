import axios from "axios";
let URL = "https://clone-bhineka.herokuapp.com";

export const getCart = (id) =>{
    console.log('masuk')
    return{
        type:'GET_CART',
        payload: axios.get(`${URL}/cart/${id}`)
    }
}