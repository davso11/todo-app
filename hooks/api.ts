import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../utils/api";

export function useTodos(userId: string) {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(userId),
    enabled: !!userId,
  });
}
