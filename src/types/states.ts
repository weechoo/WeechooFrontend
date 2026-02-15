export type EmptyStateProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export type LoaderProps = {
  size?: "sm" | "md" | "lg";
  colorClass?: string;
};

export type ErrorStateProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};
