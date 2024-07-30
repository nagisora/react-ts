import { FC } from "react";
import { TodoType } from "./types/todo";

// export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "完：" : "未："
  return <p>{`${completeMark}${title}(ユーザー：${userId})`}</p>
}