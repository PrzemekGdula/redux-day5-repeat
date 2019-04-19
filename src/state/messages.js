const SET = 'messages/SET'
const ADD = 'messages/ADD'
const NEW_TEXT_CHANGED = 'messages/NEW_TEXT_CHANGED'

export const NewTextChangedActionCreator = newMessageText => ({
    type: NEW_TEXT_CHANGED,
    newMessageText
})

const initialState = {
    messages: [],
    newMessageText: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_TEXT_CHANGED:
            return {
                ...state,
                newMessageText: action.newMessageText,
            }
        default:
            return state
    }
}