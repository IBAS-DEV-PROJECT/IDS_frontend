import { useApi } from '@/shared/hooks/useApi';

// type UserCountResponse = {
//   status: number;
//   total_participants: number;
//   messege: string;
// };

// export const useUserCount = () =>
//   useApi<UserCountResponse>({
//     queryKey: ['userCount'],
//     endpoint: '/counting',
//   });

// dummy data

export const useUserCount = () => {
  const dummyData = {
    total_participants: 1234,
    status: 200,
    messege: "mock success",
  };

  return {
    data: dummyData,
    isLoading: false,
    error: null,
  };
};


