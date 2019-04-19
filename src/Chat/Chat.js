import React from 'react'

import { connect } from 'react-redux'
import { newTextChangedActionCreator, addMessageAsyncActionCreator } from '../state/messages'

const Chat = (props) => (
  <div>
    <input
      value={props._newMessageText}
      onChange={props._newTextChanged}
    />

    <button
      onClick={props._addMessage}
    >
      ADD
    </button>

    {
      props._messages.map(
        (message, i) => (
          <div
            key={i + message.text}
          >
            {message.text}
          </div>
        )
      )
    }
  </div>
)

const mapStateToProps = state => ({
  _newMessageText: state.messages.newMessageText,
  _messages: state.messages.messages,
})

const mapDispatchToProps = dispatch => ({
  _newTextChanged: (event) => dispatch(newTextChangedActionCreator(event.target.value)),
  _addMessage: () => dispatch(addMessageAsyncActionCreator()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)