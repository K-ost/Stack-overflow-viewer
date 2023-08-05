import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface appState {
  search: string
  userID: number | null
  userName: string
}

// Define the initial state using that type
const initialState: appState = {
  search: '',
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
    setUserID: (state, action) => {
      state.userID = action.payload
    },
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    resetState: (state) => {
      state.search = ''
      state.userID = null
      state.userName = ''
    }
  },
})

export const { resetState, setSearch, setUserID, setUserName } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) => state.app.search
export const selectUserID = (state: RootState) => state.app.userID
export const selectUserName = (state: RootState) => state.app.userName

export default counterSlice.reducer