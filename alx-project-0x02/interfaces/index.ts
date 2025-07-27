export interface User {
  id: number;
  name: string;
  email: string;
}

// Add CardProps interface
export interface CardProps {
  title: string;
  content: string;
}

// Add ButtonProps interface
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

// Add PostProps interface
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

// Add UserProps interface
export interface UserProps {
  name: string;
  email: string;
  address: string;
}
