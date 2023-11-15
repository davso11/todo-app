import { useQuery } from "@tanstack/react-query";
import { getCategories, getTodos } from "../utils/api";

export function useTodos(userId: string) {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(userId),
    enabled: !!userId,
  });
}

export function useTodoCategories() {
  return useQuery({
    queryKey: ["todo-categories"],
    queryFn: getCategories,
  });
}
