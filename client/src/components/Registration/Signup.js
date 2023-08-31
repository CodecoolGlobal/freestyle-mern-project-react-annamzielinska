import { useState } from "react"
import { useSignup } from "../../hooks/UseSignup"
import { useNavigate } from "react-router-dom"
const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const { signup, error, isLoading } = useSignup()

    const navigate = useNavigate()
    const handleClick = () => navigate('/login')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await signup(username, password)
            if (response) {
                setTimeout(() => {
                    handleClick()
                }, 3000)
            }
        } catch (error) { console.error(error) }
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <label>Username:</label>
            <input
                type="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <br />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <br />
            <button disabled={isLoading}>Sign up</button>
            {error ? (<div className="error">{error}</div>) : (<div className="succes"></div>)}

        </form >
    )
}

export default Signup