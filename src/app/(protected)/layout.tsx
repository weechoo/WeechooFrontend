"use client";

import { TopNavbar } from "./components/navbar/TopNavbar";
import { Sidebar } from "./components/sidebar/Sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen font-satoshi">
      <Sidebar />
      <div className="flex md:ml-64 flex-col flex-1 overflow-hidden">
        <TopNavbar />
        <main className="flex-1  overflow-y-auto p-6 bg-[#FAFAFA] border-[0.8px] border-slate-200">
          {children}
        </main>
      </div>
    </div>
  );
}
