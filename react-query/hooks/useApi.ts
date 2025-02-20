import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/utils/api";

interface ApiErrorResponse {
  detail?: string;
  [key: string]: unknown;
}

export function useApi<T>(url: string, pageSize: number = 10) {
  const queryClient = useQueryClient();

  // Fetch Paginated Data
  const useFetchData = (page: number) => {
    return useQuery<{ results: T[]; hasMore: boolean }, AxiosError<ApiErrorResponse>>({
      queryKey: [url, page, pageSize],
      queryFn: async () => {
        const response = await api.get<T[]>(`${url}?_page=${page}&_limit=${pageSize}`);
        return {
          results: response.data,
          hasMore: response.data.length === pageSize, // If full page, assume more pages exist
        };
      },
      placeholderData: (previousData) => previousData, // Keeps previous data while fetching new
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });
  };

  // Fetch a Single Item by ID
  const useFetchById = (id: string | number) => {
    return useQuery<T, AxiosError<ApiErrorResponse>>({
      queryKey: [url, id],
      queryFn: async () => {
        const response = await api.get<T>(`${url}/${id}`);
        return response.data;
      },
      enabled: !!id, // Only fetch if ID exists
    });
  };

  // Add Item
  const useAddItem = useMutation<T, AxiosError<ApiErrorResponse>, Partial<T>>({
    mutationFn: async (item) => {
      const response = await api.post<T>(url, item);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [url] });
    },
  });

  // Update Item
  const useUpdateItem = useMutation<T, AxiosError<ApiErrorResponse>, { id: string | number; item: Partial<T> }>({
    mutationFn: async ({ id, item }) => {
      const response = await api.patch<T>(`${url}/${id}`, item);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [url] });
    },
  });

  // Delete Item
  const useDeleteItem = useMutation<void, AxiosError<ApiErrorResponse>, string | number>({
    mutationFn: async (id) => {
      await api.delete(`${url}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [url] });
    },
  });

  return { useFetchData, useFetchById, useAddItem, useUpdateItem, useDeleteItem };
}
