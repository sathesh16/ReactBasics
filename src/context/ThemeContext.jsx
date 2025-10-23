import React, { createContext, useContext, useState } from 'react'
import LoginForm from '../forms/LoginForm';

const ThemeContext = createContext('dark');
function FormTheme() {
    const [theme, setTheme] = useState('dark');
    return (
        <>
            <ThemeContext value={theme}>
                <ThemeElement></ThemeElement>

                <button onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                }}>Toogle theme</button>
            </ThemeContext>
        </>
    )
}

function ThemeElement() {
    const theme = useContext(ThemeContext)
    return (
        <>
            <div style={{ background: `${theme === 'dark' ? 'black' : 'white'}`, color: `${theme === 'dark' ? 'white' : 'black'}`, padding: '40px', textAlign: 'center', marginTop: '80px', marginBottom: '40px' }}>
                Theme Element
            </div>
        </>
    )
}

export default FormTheme
