import { AppLogo } from "../common/AppLogo";

export function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full border-[1.6px] border-[#E5E5E5] max-w-sm items-center bg-white rounded-[14px] shadow-lg p-6 sm:p-8 space-y-6">
        <AppLogo />
        {children}
      </div>
    </>
  );
}
