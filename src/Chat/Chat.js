import React from 'react'

import { connect } from 'react-redux'
import {newTextChangedActionCreator} from '../state/messages'

const Chat = (props) => (
    <div>
        <input
            value={props._newMessageText}
            onChange={props._newTextChanged}
        />
    </div>
)

const mapStateToProps = state => ({
    _newMessageText: state.messages.newMessageText,
})

const mapDispatchToProps = dispatch => ({
    _newTextChanged: (event) => dispatch(newTextChangedActionCreator(event.target.value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)