import { AppLogo } from "../common/app-logo";

export function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full border-[1.6px] border-[#E5E5E5] max-w-sm items-center bg-white rounded-[14px] shadow-lg px-6 sm:px-8 py-10 space-y-6">
        <AppLogo />
        {children}
      </div>
    </>
  );
}
