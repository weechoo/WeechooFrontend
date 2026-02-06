export type EmptyStateProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export type LoaderProps = {
  size?: "sm" | "md" | "lg";
  colorClass?: string; // for button/other usage if needed
};

export type ErrorStateProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};
