import { LucideIcon } from "lucide-react";
import { UserRole } from "./auth";

export type NavItem = {
  icon: LucideIcon;
  label: string;
  href: string;
  badge?: number;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export type RoleConfig = {
  role: UserRole;
  title: string;
  subtitle: string;
  navSections: NavSection[];
};
