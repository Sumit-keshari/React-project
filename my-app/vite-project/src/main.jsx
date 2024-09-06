import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const anotherElement=(
//     <a href="https://google.com" target='blank'>google</a>
// )
const variable="this is var"
const element=React.createElement(
    'a',
    {
        href:"https://google.com",
        target:'blank'

    },
    'click me ', 
     variable
)
createRoot(document.getElementById('root')).render(
    // <App/> 
    element
)
