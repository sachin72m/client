import axios from 'axios';

export const userRegister = (data) =>{
    return async (dispatch) => {

        const config = {
            headers : {
                'Content-Type':'application/json'
            }
        }
        try {
            const response = await axios.post('/api/chatapp/user-register',data,config);
            localStorage.setItem(response.data);

        } catch (error) {
            console.log(error.response.data);
        }
    }
}