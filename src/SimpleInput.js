
import React from 'react'

import { connect } from 'react-redux'
import { changeActionCreator } from './state/simpleInput'

const SimpleInput = (props) => (
    <div>
        <h4>
            {props._value}
        </h4>
        <input
            value={props._value}
            onChange={props._change}
        />
    </div>
)

export default connect(
    state => ({
        _value: state.simpleInput.value
    }),
    dispatch => ({
        _change: (event) => dispatch(changeActionCreator(event.target.value))
    }),
)(SimpleInput)