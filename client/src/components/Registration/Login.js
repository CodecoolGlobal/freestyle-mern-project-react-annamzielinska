import { useState } from "react"
import { useLogin } from "../../hooks/UseLogin"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password);
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log In</h3>

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
            <button disabled={isLoading}>Log in</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login