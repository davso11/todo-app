import { axiosInstance } from "../../lib/axios";
import { PostTodo, Todo } from "../../types";

const TODOS_BASE_URI = "/api/tasks";

// TODOS
export async function getTodos(userId: string) {
  const { data, status } = await axiosInstance.post(TODOS_BASE_URI, {
    userId,
  });
  if (status !== 200) throw data; // error
  return data as Todo[];
}

export async function postTodo(todo: PostTodo) {
  const url = `${TODOS_BASE_URI}/new`;
  const { data, status } = await axiosInstance.post(url, todo);
  if (status !== 201) throw data; // error
  return data as Todo;
}
