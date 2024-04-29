import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface HeaderState {
  pageTitle: string
}

const initialState: HeaderState = {
  pageTitle: "",
}

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.pageTitle = action.payload
    },
  },
})

export const { setPageTitle } = headerSlice.actions

export const selectPageTitle = (state: RootState) => state.header.pageTitle

export default headerSlice.reducer
