import { REGISTER, REGISTER_FAIL, LOADING } from './types';
import axios from 'axios';


export const registerUser = (userDetails, history) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:4000/users/register', userDetails);
        dispatch ({type: LOADING});
        dispatch({
            type: REGISTER,
            payload: res.data
        });
        history.push('/success');
    } catch (err) {
        console.log(err.response);
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response
        });
        history.push('/failure');
    }
}