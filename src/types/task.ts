export interface Task {
  id: number;
  title: string;
  description?: string;
  status: "Completed" | "Pending" | "Error" | "In Progress";
  tag: string;
  dueDate: string;
}
