import axios from 'axios';
let URL = 'https://clone-bhineka.herokuapp.com'

export const regUser = (dataReg) => {
    console.log('XXXXXX');
    console.log(dataReg);
    
    return {
        type: 'REG_USER',
        payload: axios.post(URL + "/user", dataReg)
    }
}