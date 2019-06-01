// ------------------------------------
// Constants
// ------------------------------------
export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNOUT = 'USER_SIGNOUT'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */
export const signIn = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : USER_SIGNIN,
          payload : getState().user
        })
        resolve()
      }, 200)
    })
  }
}
    

export const signOut = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : USER_SIGNOUT
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  signIn,
  signOut
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_SIGNIN]    : (state, action) => action.payload,
  [USER_SIGNOUT] : (state, action) => state
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  id : undefined,
  password : undefined
}
export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
