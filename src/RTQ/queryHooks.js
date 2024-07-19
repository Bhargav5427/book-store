import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./api";

export const useGetData = ({ key, endpoint }) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => fetchData(endpoint),
    onError: (error) => {
      console.error(`Error fetching data from ${endpoint}:`, error);
    },
  });
};
