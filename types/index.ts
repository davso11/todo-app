import { z } from "zod";

export const TodoSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, { message: "Title can't be empty" }),
  targetDate: z.coerce.date(),
  createdAt: z.coerce.date(),
  updateAt: z.coerce.date(),
  userId: z.string(),
  note: z.string().nullable(),
  isDone: z.boolean(),
});

export const PostTodoSchema = TodoSchema.merge(
  z.object({
    id: z.string().uuid().optional(),
    updateAt: z.coerce.date().optional(),
    isDone: z.boolean().optional(),
  })
);

export type Todo = z.infer<typeof TodoSchema>;
export type PostTodo = z.infer<typeof PostTodoSchema>;
