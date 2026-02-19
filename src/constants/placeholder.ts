import { Order } from "@/types/menu";
import { Building2, ChefHat, Salad, Users } from "lucide-react";

// orders
export const orders: Order[] = [
  {
    name: "Jollof & Chicken Stew",
    orders: 245,
    status: "Preparing",
  },
  {
    name: "Ga Kenkey & Pork Chops, Pepper",
    orders: 195,
    status: "Ready",
  },
  {
    name: "Banku with Meat Okro Stew",
    orders: 63,
    status: "Ready",
  },
];

// vendor pie chart

export const chartData = [
  { name: "Coastal Delights", value: 15 },
  { name: "AJ's Kitchen", value: 20 },
  { name: "African Delight", value: 35 },
  { name: "Eduanepa Corner", value: 30 },
];

// active companies

export const companies = [
  {
    name: "Ecobank Ghana Ltd",
    region: "Accra",
    employees: 2374,
  },
  {
    name: "Adansi Travels",
    region: "Legon",
    employees: 679,
  },
  {
    name: "Accra Digital Centre",
    region: "Circle",
    employees: 350,
  },
  {
    name: "Absa Bank Ghana HQ",
    region: "Accra",
    employees: 178,
  },
];

// recent activity

export const activities = [
  {
    text: "Menu published for next week (Oct 13 - 17)",
    time: "2 hours ago",
  },
  {
    text: "New company onboarded: Adansi Travels, Accra",
    time: "5 hours ago",
  },
  {
    text: "AJ's Kitchen changed order status: Ready",
    time: "11:24 GMT · Yesterday",
  },
  {
    text: "Orders consolidated for the day",
    time: "15:34 GMT · 13th October 2025",
  },
];

// COMPANY STATS
export const companyStats = [
  {
    title: "Active Companies",
    value: "07",
    trend: {
      value: "+12%",
      direction: "up" as const,
      period: "vs last month",
    },
  },
  {
    title: "Total Employees",
    value: "3,467",
    trend: {
      value: "+12%",
      direction: "up" as const,
      period: "vs last month",
    },
  },
  {
    title: "This Week",
    value: "562",
    subtitle: "orders",
    trend: {
      value: "+12%",
      direction: "up" as const,
      period: "vs last week",
    },
  },
  {
    title: "Expense",
    value: "GHS 25,789.00",
    trend: { value: "+12%", direction: "up" as const, period: "this month" },
  },
];

// DASHBOARD STATS
export const dashboardStats = [
  {
    title: "Active Companies",
    value: "07",
    icon: Building2,
    trend: { value: "+12%", direction: "up" as const },
  },
  {
    title: "Total Employees",
    value: "2,349",
    icon: Users,
    trend: { value: "+4%", direction: "up" as const },
  },
  {
    title: "Active Vendors",
    value: "10",
    icon: ChefHat,
    trend: { value: "+4%", direction: "up" as const },
  },
  {
    title: "Delivering Today",
    value: "264",
    icon: Salad,
    trend: { value: "+12%", direction: "up" as const },
  },
];

export const allCompanies = [
  {
    id: 1,
    company: "TechHub Lagos",
    hrAdmin: "John Doe",
    email: "john@techhub.com",
    onboarded: "17/10/2025",
    employees: 180,
    totalOrders: 45,
    status: "Active",
  },
  {
    id: 2,
    company: "Fintech Solutions",
    hrAdmin: "Jane Smith",
    email: "jane@fintech.com",
    onboarded: "17/10/2025",
    employees: 248,
    totalOrders: 45,
    status: "Active",
  },
  {
    id: 3,
    company: "E-commerce Plus",
    hrAdmin: "David Brown",
    email: "david@ecommerce.com",
    onboarded: "17/10/2025",
    employees: 180,
    totalOrders: 45,
    status: "Inactive",
  },
  {
    id: 4,
    company: "Creative Agency",
    hrAdmin: "Mike Johnson",
    email: "mike@creative.com",
    onboarded: "17/10/2025",
    employees: 180,
    totalOrders: 45,
    status: "Active",
  },
  {
    id: 5,
    company: "DataCorp Africa",
    hrAdmin: "Sarah Williams",
    email: "sarah@datacorp.com",
    onboarded: "17/10/2025",
    employees: 180,
    totalOrders: 45,
    status: "Active",
  },
  {
    id: 6,
    company: "E-commerce Plus",
    hrAdmin: "David Brown",
    email: "david@ecommerce.com",
    onboarded: "17/10/2025",
    employees: 180,
    totalOrders: 45,
    status: "Active",
  },
  {
    id: 7,
    company: "Fintech Solutions",
    hrAdmin: "Jane Smith",
    email: "jane@fintech.com",
    onboarded: "17/10/2025",
    employees: 248,
    totalOrders: 45,
    status: "Active",
  },
];
