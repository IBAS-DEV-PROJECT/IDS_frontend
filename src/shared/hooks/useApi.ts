import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type UseApiProps<T> = {
  queryKey: string[];
  endpoint: string;
  method?: HttpMethod;
  body?: Record<string, any>;
  options?: UseQueryOptions<T>;
};

export const useApi = <T = unknown>({
  queryKey,
  endpoint,
  method = 'GET',
  body,
  options,
}: UseApiProps<T>): UseQueryResult<T> => {
  const fetcher = async (): Promise<T> => {
    const res = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
    });

    const statusCode = res.status;

    if (!res.ok) {
      if (statusCode === 401) throw new Error('Unauthorized');
      if (statusCode === 403) throw new Error('Forbidden');
      if (statusCode === 404) throw new Error('Not Found');
      if (statusCode >= 500) throw new Error('Server Error');
      throw new Error(`Unexpected error (${statusCode})`);
    }

    const data: T = await res.json();
    return data;
  };

  return useQuery<T>({
    queryKey,
    queryFn: fetcher,
    ...options,
  });
};