import { Task as TaskType } from "../types/task";

export const tasks: TaskType[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "Completed",
    tag: "Internal",
    dueDate: "2023-01-01",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "Pending",
    tag: "Needs action",
    dueDate: "2023-01-01",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "Error",
    tag: "Customer",
    dueDate: "2023-01-01",
  },
];
