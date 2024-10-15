import {createApi} from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import Attendance from '../Screens/Attendance/Attandance';

const axiosBaseQuery = (baseUrl: any) => async (payload: any) => {
  try {
    const result = await axios({
      url: baseUrl?.baseUrl + payload?.url,
      method: payload?.method,
      data: payload?.body,
      headers: payload?.headers,
    });
    return {data: result?.data};
  } catch (axiosError) {
    const err: any = axiosError;
    return {
      error: {
        status: err?.response?.status,
        data: err?.response?.data || err?.message,
      },
    };
  }
};

// https://solzitesssvc.azurewebsites.net/api

export const services = createApi({
  reducerPath: 'parsApi',
  baseQuery: axiosBaseQuery({baseUrl: 'https://devportalapi.solzit.com/api'}),
  tagTypes: ['Hello', 'Hello1', 'attendance'],

  endpoints: builder => ({
    // userAuthenticationlogin: builder.mutation({
    //   query: data => ({
    //     url: `/V1/Auth/Authenticate`,
    //     method: 'POST',
    //     body: data,
    //   }),
    // }),

    EmployeeAppliedLeaves: builder.query({
      query: data => ({
        url: `/EmployeeLeaveRecords/AppliedLeaveRecordList/${data?.ids}`,
        method: 'GET',
      }),
      providesTags: ['Hello'],
    }),

    EmployeeLeaveApply: builder.mutation({
      query: data => ({
        url: `/EmployeeLeaveRecords/NewLeaveRequest/?${data?.id}&${data.module}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Hello'],
    }),

    ProcessedLeaves: builder.query({
      query: data => ({
        url: `/EmployeeLeaveRecords/AcceptedLeaveRecordList/${data.Id}`,
        method: 'GET',
        body: data,
      }),
      providesTags: ['Hello1'],
    }),

    EmployeeCancelLeaves: builder.mutation({
      query: data => ({
        url: `/EmployeeLeaveRecords/CancelLeave`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Hello1'],
    }),

    Forgetpassword: builder.mutation({
      query: data => ({
        url: `EmployeeAuthorization/ForgotPassword`,
        method: 'POST',
        body: data,
      }),
    }),

    SoluzioneHolidays: builder.query({
      query: data => ({
        url: `/Dashboard/GetSoluzioneHolidaysDashboard/`,
        method: 'GET',
      }),
    }),

    EmployeeAttendanceList: builder.mutation({
      query: data => ({
        url: `/EmployeeAttendance/EmployeeAttendanceList`,
        method: 'POST',
        body: data,
      }),
    }),

    AttendanceList: builder.query({
      query: data => ({
        url: `/EmployeeLeaveRecords/LeaveBalanceRecordList/${data.UserID}`,
        method: 'GET',
        body: data,
      }),
    }),

    AttendanceMonthList: builder.mutation({
      query: data => ({
        url: `/EmployeeAttendance/EmployeeAttendanceList`,
        method: 'POST',
        body: data,
      }),
    }),

    EmployeeAttendanceQuery: builder.query({
      query: data => ({
        url: `/EmployeeAttendance/GetAttendanceQuery?id=${data?.AttendanceID}`,
        method: 'GET',
        body: data,
      }),
      providesTags: ['attendance'],
    }),

    AskEmployeeAttendanceQuery: builder.mutation({
      query: data => ({
        url: `/EmployeeAttendance/AskQueryForAttendance`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['attendance'],
    }),

    EmployeeLeaveRecords: builder.query({
      query: data => ({
        url: `/EmployeeLeaveRecords/LeaveBalanceMonthlyRecordList/${data?.MonthID}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  // useUserAuthenticationloginMutation,
  useEmployeeLeaveApplyMutation,
  useEmployeeAppliedLeavesQuery,
  useEmployeeCancelLeavesMutation,
  useProcessedLeavesQuery,
  useForgetpasswordMutation,
  useSoluzioneHolidaysQuery,
  useEmployeeAttendanceListMutation,
  useAttendanceListQuery,
  useAttendanceMonthListMutation,
  useEmployeeAttendanceQueryQuery,
  useAskEmployeeAttendanceQueryMutation,
  useEmployeeLeaveRecordsQuery
} = services;
