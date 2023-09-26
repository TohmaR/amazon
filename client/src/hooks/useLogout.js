import { useAuthContext } from "./useAuthContext";
import { useHistory } from "react-router-dom";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const history = useHistory();

    const logout = () => {
        //remove user from localstorage
        localStorage.removeItem('user');

        dispatch({type: 'LOGOUT'});
    }

    return {logout}
}