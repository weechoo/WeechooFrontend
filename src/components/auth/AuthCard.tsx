export function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
      {children}
    </div>
  );
}
