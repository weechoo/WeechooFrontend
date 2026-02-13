"use client";

import { Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TopNavbar() {
  return (
    <div className="h-16 bg-white border-b px-6 flex items-center justify-between">
      <Input placeholder="Search" className="max-w-sm" />

      <div className="flex items-center gap-4">
        <Bell className="text-muted-foreground" />
        <Avatar>
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
