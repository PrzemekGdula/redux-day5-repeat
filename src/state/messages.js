import { database } from '../firebaseConf'

const SET = 'messages/SET'
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

export const addMessageAsyncActionCreator = () => (dispatch, getState) => {
  const state = getState()

  database.ref('chat2').push({ text: state.messages.newMessageText })
  
  dispatch(newTextChangedActionCreator(''))
}

export const startListeningMessagesAsyncActionCreator = () => (dispatch, getState) => {
  database.ref('chat2').on(
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

const setMessagesActionCreator = messages => ({
  type: SET,
  messages
})
export const newTextChangedActionCreator = newMessageText => ({
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
    case SET:
      return {
        ...state,
        messages: action.messages,
      }
    default:
      return state
  }
}