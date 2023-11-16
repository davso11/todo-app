export type Todo = {
  id: string;
  title: string;
  targetDate: Date;
  createdAt: Date;
  updateAt: Date;
  note: string | null;
  isDone: boolean;
};
