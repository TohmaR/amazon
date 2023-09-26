import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useHistory} from 'react-router-dom';

export const useLogin = () => {
    const history = useHistory();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/connexion', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            //save the user to localStorage
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context

            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            
            history.push('/')
        }
    }
    return { login, isLoading, error }
}