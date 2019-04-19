const CHANGE = 'simpleInput/CHANGE'

export const changeActionCreator = (newValue) => ({
    type: CHANGE,
    newValue
})

const initialState = {
    value: '',
}
export default (state = initialState, action) => {
    if (action.type === CHANGE) {
        return {
            ...state,
            value: action.newValue
        }
    }

    return state
}