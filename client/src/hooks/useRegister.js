import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useHistory} from 'react-router-dom'

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const history = useHistory();

    const register = async (email, password, firstName, lastName) => {
        setIsLoading(true)
        setError(null);

        const response = await fetch('/api/user/inscription', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, firstName, lastName})
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
             
            history.push("/")
        }
    }
    return { register, isLoading, error }
}