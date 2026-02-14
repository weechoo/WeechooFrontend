"use client";

import {
  LayoutDashboard,
  Building2,
  ShoppingCart,
  FileText,
  BarChart3,
  Settings,
  HelpCircle,
  UtensilsCrossed,
  ChefHat,
} from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import Image from "next/image";
import { weechooLogo } from "@/assets/images";

export const Sidebar = () => {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64.5 bg-white border-r flex-col">
      <div className="p-6 border-b flex items-center gap-6 shrink-0">
        <div className="shrink-0">
          <Image
            src={weechooLogo}
            alt="Weechoo Logo"
            width={45}
            height={32}
            className="block"
          />
        </div>

        <div className="h-8 border-l border-[#DFDFDF]" />

        <div className="flex flex-col gap-2 whitespace-nowrap">
          <h2 className="font-bold text-base leading-[100%] text-neutral-black">
            Weechoo Admin
          </h2>
          <p className="text-xs leading-none font-normal text-[#6A7282]">
            System Dashboard
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="p-5.75 flex flex-col gap-2">
          <h3 className="leading-[100%] font-bold text-xs tracking-tighter text-gray-100">
            MANAGEMENT
          </h3>

          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={UtensilsCrossed} label="Menu Management" />
          <SidebarItem icon={Building2} label="Companies" />
          <SidebarItem icon={ShoppingCart} label="Orders" />
          <SidebarItem icon={ChefHat} label="Vendors" />
          <SidebarItem icon={FileText} label="Invoices" />

          <div className="p-5.75 flex flex-col gap-2">
            <h3 className="leading-[100%] font-bold text-xs tracking-tighter text-gray-100">
              ACCOUNT
            </h3>

            <SidebarItem icon={BarChart3} label="Analytics" />
            <SidebarItem icon={Settings} label="Settings" />
            <SidebarItem icon={HelpCircle} label="Help & Support" />
          </div>
        </div>
      </div>
    </aside>
  );
};
