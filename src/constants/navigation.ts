// config/navigation.ts
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
  Users,
  Calendar,
  CreditCard,
  Package,
  ClipboardList,
  Truck,
} from "lucide-react";
import { RoleConfig } from "@/types/navigation";

export const navigationConfig: Record<string, RoleConfig> = {
  WeechooAdmin: {
    role: "WeechooAdmin",
    title: "Weechoo Admin",
    subtitle: "System Dashboard",
    navSections: [
      {
        title: "MANAGEMENT",
        items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "/weechoo-admin" },
          {
            icon: UtensilsCrossed,
            label: "Menu Management",
            href: "/weechoo-admin/menu",
          },
          {
            icon: Building2,
            label: "Companies",
            href: "/weechoo-admin/companies",
          },
          {
            icon: ShoppingCart,
            label: "Orders",
            href: "/weechoo-admin/orders",
          },
          { icon: ChefHat, label: "Vendors", href: "/weechoo-admin/vendors" },
          {
            icon: FileText,
            label: "Invoices",
            href: "/weechoo-admin/invoices",
          },
        ],
      },
      {
        title: "ACCOUNT",
        items: [
          {
            icon: BarChart3,
            label: "Analytics",
            href: "/weechoo-admin/analytics",
          },
          {
            icon: Settings,
            label: "Settings",
            href: "/weechoo-admin/settings",
          },
          {
            icon: HelpCircle,
            label: "Help & Support",
            href: "/weechoo-admin/support",
          },
        ],
      },
    ],
  },
  CompanyAdmin: {
    role: "CompanyAdmin",
    title: "Company Admin",
    subtitle: "HR Dashboard",
    navSections: [
      {
        title: "MANAGEMENT",
        items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "/company-admin" },
          { icon: Users, label: "Employees", href: "/company-admin/employees" },
          {
            icon: Calendar,
            label: "Meal Plans",
            href: "/company-admin/meal-plans",
          },
          {
            icon: ShoppingCart,
            label: "Orders",
            href: "/company-admin/orders",
          },
          {
            icon: CreditCard,
            label: "Billing",
            href: "/company-admin/billing",
          },
        ],
      },
      {
        title: "ACCOUNT",
        items: [
          { icon: BarChart3, label: "Reports", href: "/company-admin/reports" },
          {
            icon: Settings,
            label: "Settings",
            href: "/company-admin/settings",
          },
          {
            icon: HelpCircle,
            label: "Help & Support",
            href: "/company-admin/support",
          },
        ],
      },
    ],
  },
  Employee: {
    role: "Employee",
    title: "Employee",
    subtitle: "Meal Dashboard",
    navSections: [
      {
        title: "MAIN",
        items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "/employee" },
          { icon: UtensilsCrossed, label: "Menu", href: "/employee/menu" },
          { icon: ShoppingCart, label: "My Orders", href: "/employee/orders" },
          {
            icon: ClipboardList,
            label: "Meal History",
            href: "/employee/history",
          },
        ],
      },
      {
        title: "ACCOUNT",
        items: [
          { icon: Settings, label: "Settings", href: "/employee/settings" },
          {
            icon: HelpCircle,
            label: "Help & Support",
            href: "/employee/support",
          },
        ],
      },
    ],
  },
  Vendor: {
    role: "Vendor",
    title: "Vendor",
    subtitle: "Restaurant Dashboard",
    navSections: [
      {
        title: "MANAGEMENT",
        items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "/vendor" },
          { icon: Package, label: "Menu Items", href: "/vendor/menu" },
          { icon: ShoppingCart, label: "Orders", href: "/vendor/orders" },
          { icon: Truck, label: "Delivery", href: "/vendor/delivery" },
          { icon: FileText, label: "Invoices", href: "/vendor/invoices" },
        ],
      },
      {
        title: "ACCOUNT",
        items: [
          { icon: BarChart3, label: "Analytics", href: "/vendor/analytics" },
          { icon: Settings, label: "Settings", href: "/vendor/settings" },
          {
            icon: HelpCircle,
            label: "Help & Support",
            href: "/vendor/support",
          },
        ],
      },
    ],
  },
};
