import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { ApiResponse, Match, ApiErrorResponse } from './types';

const API_URL = 'https://app.ftoyd.com/fronttemp-service/fronttemp';

export const useMatches = () => {
  return useQuery<Match[], AxiosError<ApiErrorResponse>>({
    queryKey: ['matches'],
    queryFn: async () => {
      const { data } = await axios.get<ApiResponse>(API_URL);
      
      if (!data.ok) {
        throw new Error('API returned not ok status');
      }
      
      if (!data.data?.matches || !Array.isArray(data.data.matches)) {
        throw new Error('Invalid data structure');
      }
      
      return data.data.matches;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};