import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface appState {
  search: string
  tag: string
  userID: number | null
  userName: string
}

// Define the initial state using that type
const initialState: appState = {
  search: '',
  tag: '',
  userID: null,
  userName: ''
}

export const counterSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setUser: (state, action) => {
      state.userID = action.payload.id
      state.userName = action.payload.name
      state.tag = ''
    },
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    setTag: (state, action) => {
      state.tag = action.payload
      state.userID = null
      state.userName = ''
    },
    resetState: (state) => {
      state.search = ''
      state.userID = null
      state.userName = ''
      state.tag = ''
    }
  },
})

export const { resetState, setSearch, setTag, setUser } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) => state.app.search
export const selectTag = (state: RootState) => state.app.tag
export const selectUser = (state: RootState) => {
  return {
    id: state.app.userID,
    name: state.app.userName
  }
}

export default counterSlice.reducer