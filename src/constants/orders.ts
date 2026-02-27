import { WeekOrders } from "../types/orders";

export const ordersData: WeekOrders[] = [
  {
    id: "week-42-2025",
    weekNumber: 42,
    startDate: "2025-10-14",
    endDate: "2025-10-18",
    year: 2025,
    days: [
      {
        date: "2025-10-14",
        dayName: "Monday",
        meals: [
          {
            id: "meal-1",
            mealName: "Jollof Rice with Chicken",
            vendorId: "vendor-1",
            vendorName: "Chef's Kitchen",
            pricePerUnit: 25,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 30 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 45,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 15 },
            ],
          },
        ],
      },
      {
        date: "2025-10-15",
        dayName: "Tuesday",
        meals: [
          {
            id: "meal-2",
            mealName: "Fried Rice & Fish",
            vendorId: "vendor-2",
            vendorName: "AccraEats Kitchen",
            pricePerUnit: 30,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 30 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 45,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 15 },
            ],
          },
        ],
      },
      {
        date: "2025-10-16",
        dayName: "Wednesday",
        meals: [
          {
            id: "meal-3",
            mealName: "Banku with Tilapia",
            vendorId: "vendor-3",
            vendorName: "Ghana Delights",
            pricePerUnit: 35,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 25 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 35,
              },
              { companyId: "c4", companyName: "Media House", quantity: 20 },
            ],
          },
        ],
      },
      {
        date: "2025-10-17",
        dayName: "Thursday",
        meals: [
          {
            id: "meal-4",
            mealName: "Waakye with Egg",
            vendorId: "vendor-1",
            vendorName: "Chef's Kitchen",
            pricePerUnit: 20,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 40 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 50,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 25 },
            ],
          },
        ],
      },
      {
        date: "2025-10-18",
        dayName: "Friday",
        meals: [
          {
            id: "meal-5",
            mealName: "Fufu with Goat Soup",
            vendorId: "vendor-3",
            vendorName: "Ghana Delights",
            pricePerUnit: 40,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 20 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 30,
              },
              { companyId: "c4", companyName: "Media House", quantity: 15 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "week-43-2025",
    weekNumber: 43,
    startDate: "2025-10-21",
    endDate: "2025-10-25",
    year: 2025,
    days: [
      {
        date: "2025-10-21",
        dayName: "Monday",
        meals: [
          {
            id: "meal-6",
            mealName: "Jollof Rice with Chicken",
            vendorId: "vendor-1",
            vendorName: "Chef's Kitchen",
            pricePerUnit: 25,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 35 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 50,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 20 },
            ],
          },
          {
            id: "meal-7",
            mealName: "Fried Rice & Fish",
            vendorId: "vendor-2",
            vendorName: "AccraEats Kitchen",
            pricePerUnit: 30,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 25 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 35,
              },
            ],
          },
        ],
      },
      {
        date: "2025-10-22",
        dayName: "Tuesday",
        meals: [],
      },
      {
        date: "2025-10-23",
        dayName: "Wednesday",
        meals: [
          {
            id: "meal-8",
            mealName: "Banku with Tilapia",
            vendorId: "vendor-3",
            vendorName: "Ghana Delights",
            pricePerUnit: 35,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 30 },
              { companyId: "c4", companyName: "Media House", quantity: 25 },
            ],
          },
        ],
      },
      {
        date: "2025-10-24",
        dayName: "Thursday",
        meals: [],
      },
      {
        date: "2025-10-25",
        dayName: "Friday",
        meals: [
          {
            id: "meal-9",
            mealName: "Waakye with Egg",
            vendorId: "vendor-1",
            vendorName: "Chef's Kitchen",
            pricePerUnit: 20,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 45 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 55,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 30 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "week-44-2025",
    weekNumber: 44,
    startDate: "2025-10-28",
    endDate: "2025-11-01",
    year: 2025,
    days: [
      {
        date: "2025-10-28",
        dayName: "Monday",
        meals: [
          {
            id: "meal-10",
            mealName: "Jollof Rice with Chicken",
            vendorId: "vendor-1",
            vendorName: "Chef's Kitchen",
            pricePerUnit: 25,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 40 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 60,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 25 },
            ],
          },
        ],
      },
      {
        date: "2025-10-29",
        dayName: "Tuesday",
        meals: [
          {
            id: "meal-11",
            mealName: "Fried Rice & Fish",
            vendorId: "vendor-2",
            vendorName: "AccraEats Kitchen",
            pricePerUnit: 30,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 35 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 45,
              },
              { companyId: "c4", companyName: "Media House", quantity: 30 },
            ],
          },
        ],
      },
      {
        date: "2025-10-30",
        dayName: "Wednesday",
        meals: [
          {
            id: "meal-12",
            mealName: "Fufu with Goat Soup",
            vendorId: "vendor-3",
            vendorName: "Ghana Delights",
            pricePerUnit: 40,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 20 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 30,
              },
            ],
          },
        ],
      },
      {
        date: "2025-10-31",
        dayName: "Thursday",
        meals: [],
      },
      {
        date: "2025-11-01",
        dayName: "Friday",
        meals: [
          {
            id: "meal-13",
            mealName: "Banku with Tilapia",
            vendorId: "vendor-3",
            vendorName: "Ghana Delights",
            pricePerUnit: 35,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 30 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 40,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 20 },
            ],
          },
        ],
      },
    ],
  },
];
