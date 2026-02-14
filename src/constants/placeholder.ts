import { Order } from "@/types/menu";

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

// vendor pie chart share

export const chartData = [
  { name: "Eduanepa Corner", value: 30 },
  { name: "African Delight", value: 35 },
  { name: "AJ's Kitchen", value: 20 },
  { name: "Coastal Delights", value: 15 },
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
