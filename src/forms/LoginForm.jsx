import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginForm() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // setErrorMessage('Enter details to continue')
    let navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault();
        setErrorMessage('Enter details to continue')
        if (!userName || !password) {
            setErrorMessage('Kindly enter username and password')
        }

        if (userName === "admin" && password === "admin@123") {
            navigate("/state")
        } else {
            setErrorMessage('Login crendentials are incorrect')
        }

    }
    return (
        <>
            <form onSubmit={handleLogin}>

                <div style={{ maxWidth: '500px', display: 'flex', justifyContent: 'space-between', paddingBottom: '30px', alignItems: 'center' }}>
                    <h5>User</h5>
                    <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder='Enter your username' style={{ width: '100px', height: '20px' }} />
                </div>
                <div style={{ maxWidth: '500px', display: 'flex', justifyContent: 'space-between', paddingBottom: '30px', alignItems: 'center' }}>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your password' style={{ width: '100px', height: '20px' }} />
                </div>
                {
                    errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : <p style={{ color: "green" }}></p>
                }
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            
        </>
    )
}

export default LoginForm
