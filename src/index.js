import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'

window.React = React

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'))
