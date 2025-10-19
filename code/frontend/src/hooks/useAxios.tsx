import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface UseAxiosGetOptions {
  useBaseURL?: boolean;
  withCredentials?: boolean;
  showAlert?: boolean;
  headers?: Record<string, string>;
  staleTime?: number;
  cacheTime?: number;
  skip?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface UseAxiosGetResult {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  refetch: () => void;
}

export const useAxiosGet = (
  url: string = "",
  options: UseAxiosGetOptions = {}
): UseAxiosGetResult => {
  const queryKey = [url];

  const { data, error, isLoading, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await axios.get(`https://backend-credit-engine.onrender.com${url}`, {
        withCredentials: options.withCredentials ?? true,
        headers: {
          ...options.headers,
        },
      });
      return response.data;
    },
    staleTime: options.staleTime ?? 5 * 60 * 1000,
    cacheTime: options.cacheTime ?? 10 * 60 * 1000,
    retry: false,
    enabled: !!url && !options.skip,
    ...options,
  });

  if (error) {
    const errorMessage = error.message;
    if (options.showAlert && errorMessage) {
      toast.error(errorMessage);
    }
  }

  return { data, isLoading, error, refetch };
};
