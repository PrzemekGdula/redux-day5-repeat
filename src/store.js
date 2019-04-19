import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import messages, { startListeningMessagesAsyncActionCreator } from './state/messages'
import simpleInput from './state/simpleInput'

const rootReducer = combineReducers({
    messages,
    simpleInput,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(startListeningMessagesAsyncActionCreator())