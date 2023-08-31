import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Set to false by default

    const { dispatch } = useContext(AuthContext);

    const signup = async (username, password) => {

        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:8000/users/signup', {
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

    return { signup, isLoading, error };
};
