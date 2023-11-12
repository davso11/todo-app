import { axiosInstance } from "../../lib/axios";
import { Todo } from "../../types";

const TODOS_BASE_URI = "/api/tasks";

export async function getTodos(userId: string) {
  const { data, status } = await axiosInstance.post(TODOS_BASE_URI, {
    userId,
  });
  if (status !== 200) throw data; // error
  return data as Todo[];
}
