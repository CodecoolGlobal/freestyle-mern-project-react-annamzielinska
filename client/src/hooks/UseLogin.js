import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { dispatch } = useContext(AuthContext);

    const login = async (username, password) => {

        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:8000/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const json = await response.json();

        setIsLoading(false);

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
            return true
        } else {
            setError(json.error);
            return false
        }
    };

    return { login, isLoading, error };
};
