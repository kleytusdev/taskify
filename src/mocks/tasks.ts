import { Task as TaskType } from "../types/task";

export const tasks: TaskType[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "Completed",
    tag: "M",
    dueDate: "2023-01-01",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "Pending",
    tag: "M",
    dueDate: "2023-01-01",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "Error",
    tag: "M",
    dueDate: "2023-01-01",
  },
];
