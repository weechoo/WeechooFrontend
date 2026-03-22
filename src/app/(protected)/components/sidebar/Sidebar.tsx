"use client";

import Image from "next/image";
import { weechooLogo } from "@/assets/images";
import { useAuth } from "@/hooks/useAuth";
import { usePathname } from "next/navigation";
import { navigationConfig } from "@/constants/navigation";
import { RoleConfig } from "@/types/navigation";
import { SidebarItem } from "./sidebar-item";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const { role } = useAuth();
  const pathname = usePathname();

  // get nav config based on user role; fall back if role invalid
  let config: RoleConfig | undefined;
  if (role && role in navigationConfig) {
    config = navigationConfig[role];
  } else {
    // either no role yet or unrecognized; default to admin
    config = navigationConfig.WeechooAdmin;
  }

  if (!config) {
    console.warn("No config found for role:", role);
    return null;
  }

  // console.log("Sidebar rendering with role:", role, "config:", config);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r flex-col flex z-50 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="shrink-0">
              <Image
                src={weechooLogo}
                alt="Weechoo Logo"
                width={45}
                height={32}
                className="block"
              />
            </div>

            <div className="h-8 border-l border-[#DFDFDF] hidden sm:block" />

            <div className="flex flex-col gap-1 whitespace-nowrap overflow-hidden">
              <h2 className="font-bold text-base leading-[100%] text-neutral-black truncate">
                {config.title}
              </h2>
              <p className="text-xs leading-none font-normal text-[#6A7282] truncate">
                {config.subtitle}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-700 p-1 -mr-2 bg-gray-50 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {config.navSections.map((section, idx) => (
          <div key={idx} className="p-5.75 flex flex-col gap-2">
            <h3 className="leading-[100%] font-bold text-xs tracking-tighter text-gray-100">
              {section.title}
            </h3>
            {section.items.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                active={pathname === item.href}
                badge={item.badge}
              />
            ))}
          </div>
        ))}
      </div>
    </aside>
    </>
  );
}
