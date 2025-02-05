export interface Task {
  id: number;
  title: string;
  description?: string;
  status: "Planned" | "In Progress" | "Blocked" | "Waiting" | "Done";
  tag: string;
  dueDate: string;
}
