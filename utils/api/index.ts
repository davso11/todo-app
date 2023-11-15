import { axiosInstance } from "../../lib/axios";
import { Todo, TodoCategory } from "../../types";

const TODOS_BASE_URI = "/api/tasks";
const CATEGORIES_BASE_URI = "/api/task-categories";

// TODOS
export async function getTodos(userId: string) {
  const { data, status } = await axiosInstance.post(TODOS_BASE_URI, {
    userId,
  });
  if (status !== 200) throw data; // error
  return data as Todo[];
}

// TODO CATEGORIES
export async function getCategories() {
  const { data, status } = await axiosInstance.get(CATEGORIES_BASE_URI);
  if (status !== 200) throw data; // error
  return data as TodoCategory[];
}
