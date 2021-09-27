import React from 'react'
import ReactDOM from 'react-dom'
import Module from './Module'

const e = React.createElement;

ReactDOM.render(
	e(Module),
    document.querySelector('.react-module')
)