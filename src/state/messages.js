import { database } from '../firebaseConf'

const SET = 'messages/SET'
const ADD = 'messages/ADD'
const NEW_TEXT_CHANGED = 'messages/NEW_TEXT_CHANGED'

const mapObjectToArray = (obj) => (
    Object.entries(obj || {})
        .map(([key, value]) => (
            typeof value === 'object' ?
                { ...value, key }
                :
                { key, value }
        ))
)

export const startListeningMessagesAsyncActionCreator = () => (dispatch, getState) => {
    database.ref('JFDDL7/chat2').on(
        'value',
        (snapshot) => {
            dispatch(
                setMessagesActionCreator(
                    mapObjectToArray(snapshot.val())
                )
            )
        }
    )
}

const setMessagesActionCreator = (messages) => ({
    type: SET,
    messages
})

export const newTextChangedActionCreator = newMessageText => ({
    type: NEW_TEXT_CHANGED,
    newMessageText
})

export const addMessageActionCreator = () => ({
    type: ADD,
})

const initialState = {
    messages: [
        { text: 'Wynieś śmieci' }
    ],
    newMessageText: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_TEXT_CHANGED:
            return {
                ...state,
                newMessageText: action.newMessageText,
            }
        case ADD:
            return {
                ...state,
                newMessageText: '',
                messages: state.messages.concat({
                    text: state.newMessageText,
                })
            }

        case SET:
            return {
                ...state,
                messages: action.messages,
            }
        default:
            return state
    }
}
