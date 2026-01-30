export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-orange-50 via-white to-orange-100 px-4">
      {children}
    </div>
  );
}
