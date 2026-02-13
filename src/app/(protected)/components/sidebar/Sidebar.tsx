"use client";

import {
  LayoutDashboard,
  Store,
  Building2,
  ShoppingCart,
  Users,
  FileText,
  BarChart3,
  Settings,
  HelpCircle,
} from "lucide-react";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-64 bg-white border-r flex-col">
      <div className="p-6 border-b">
        <h2 className="font-bold text-lg">Weechoo Admin</h2>
        <p className="text-sm text-muted-foreground">System Dashboard</p>
      </div>

      <div className="p-4 space-y-2">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
        <SidebarItem icon={Store} label="Menu Management" />
        <SidebarItem icon={Building2} label="Companies" />
        <SidebarItem icon={ShoppingCart} label="Orders" />
        <SidebarItem icon={Users} label="Vendors" />
        <SidebarItem icon={FileText} label="Invoices" />

        <div className="mt-6 text-xs text-muted-foreground">ACCOUNT</div>

        <SidebarItem icon={BarChart3} label="Analytics" />
        <SidebarItem icon={Settings} label="Settings" />
        <SidebarItem icon={HelpCircle} label="Help & Support" />
      </div>
    </aside>
  );
};
