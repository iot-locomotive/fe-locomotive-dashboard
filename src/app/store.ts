import { configureStore } from "@reduxjs/toolkit"
import headerSlice from "../features/common/headerSlice"
import { locomotiveSummaryApi } from "../services/locomotiveSummary"

export const store = configureStore({
  reducer: {
    header: headerSlice,
    [locomotiveSummaryApi.reducerPath]: locomotiveSummaryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locomotiveSummaryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
