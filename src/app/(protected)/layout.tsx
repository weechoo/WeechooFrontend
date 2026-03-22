"use client";

import { useState } from "react";
import { TopNavbar } from "./components/navbar/top-navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen font-satoshi relative w-full">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex md:ml-64 flex-col flex-1 overflow-hidden w-full">
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#FAFAFA] border-[0.8px] border-slate-200">
          {children}
        </main>
      </div>
    </div>
  );
}
