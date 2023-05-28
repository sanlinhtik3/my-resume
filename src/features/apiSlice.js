import { createApi } from '@reduxjs/toolkit/query/react'
const apiSlice = createApi({
    reducerPath: 'skills',
    endpoints: (builder) => ({
        setSkill: builder
    })
})