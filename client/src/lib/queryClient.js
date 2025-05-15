import { QueryClient } from "@tanstack/react-query";

// Simple queryClient for our frontend-only app
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});