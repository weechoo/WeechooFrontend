export function AuthError({ message }: { message: string }) {
  return (
    <p role="alert" className="text-sm text-red-600 text-center">
      {message}
    </p>
  );
}
