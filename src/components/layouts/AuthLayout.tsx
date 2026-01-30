export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden">
      {/* top-left gradient */}
      <div
        className="absolute -top-32 -left-32 w-64 h-64
          bg-linear-to-br from-[#FBBF24] via-[#F97316] to-[#EF4444]
          rounded-full
          opacity-30
          pointer-events-none
          blur-3xl"
      />

      {/* bottom-right gradient */}
      <div
        className="absolute -bottom-32 -right-32 w-64 h-64
          bg-linear-to-br from-[#FBBF24] via-[#F97316] to-[#EF4444]
          rounded-full
          opacity-30
          pointer-events-none
          blur-3xl"
      />
      {children}
    </div>
  );
}
