"use client";

import Image from "next/image";
import { weechooLogo } from "@/assets/images";
import { useAuth } from "@/hooks/useAuth";
import { usePathname } from "next/navigation";
import { navigationConfig } from "@/constants/navigation";
import { RoleConfig } from "@/types/navigation";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
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

  console.log("Sidebar rendering with role:", role, "config:", config);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r flex-col flex">
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
}
