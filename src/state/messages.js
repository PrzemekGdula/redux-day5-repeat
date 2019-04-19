const SET = 'messages/SET'
const ADD = 'messages/ADD'
const NEW_TEXT_CHANGED = 'messages/NEW_TEXT_CHANGED'

export const newTextChangedActionCreator = newMessageText => ({
    type: NEW_TEXT_CHANGED,
    newMessageText
})

export const addMessageActionCreator = () => ({
    type: ADD,
})

const initialState = {
    messages: [
        {text: 'Wynieś śmieci'}
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
        default:
            return state
    }
}