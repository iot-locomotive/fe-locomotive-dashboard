import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface LocomotiveSummary {
  summaryId: number
  totalLoc: number
  totalLocMaintenance: number
  totalLocTransit: number
  totalLocDeparture: number
  createdDate: Date
  lastModifiedDate: Date
}

export const locomotiveSummaryApi = createApi({
  reducerPath: "locomotiveSummaryApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getLocomotiveSummary: builder.query<LocomotiveSummary, void | null>({
      query: () => "locomotive-summary",
      transformResponse: (rawResult: { data: LocomotiveSummary }) => {
        return rawResult.data
      },
    }),
  }),
})

export const {
  useGetLocomotiveSummaryQuery,
  useLazyGetLocomotiveSummaryQuery,
} = locomotiveSummaryApi
