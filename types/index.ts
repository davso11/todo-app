export type TodoCategory = {
  id: number;
  label: string;
};

export type Todo = {
  id: string;
  title: string;
  targetDate: Date;
  createdAt: Date;
  updateAt: Date;
  category: TodoCategory;
  note: string | null;
  isDone: boolean;
};
