import { createStore, combineReducers } from 'redux'

import messages from './state/messages'

const rootReducer = combineReducers({
messages
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)