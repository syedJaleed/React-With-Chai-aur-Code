import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

const anotherElement = (
    <a href='https://google.com'>visit</a>
)

const anotherUser = "Syed"

const reactElement = React.createElement(
    "a",
    {href: 'https://google.com', target: '_blank'},
    'Click me',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
