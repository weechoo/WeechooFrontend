"use client";

import { SidebarItem } from "./SidebarItem";
import Image from "next/image";
import { weechooLogo } from "@/assets/images";
import { useAuth } from "@/hooks/useAuth";
import { usePathname } from "next/navigation";
import { navigationConfig } from "@/constants/navigation";

export const Sidebar = () => {
  const { role } = useAuth();
  const pathname = usePathname();

  // get nav config based on user role
  const config = role ? navigationConfig[role] : navigationConfig.WeechooAdmin;

  if (!config) return null;

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
            {config.title}
          </h2>
          <p className="text-xs leading-none font-normal text-[#6A7282]">
            {config.subtitle}
          </p>
        </div>
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
  );
};
