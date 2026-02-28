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
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 10 },
            ],
          },

          {
            id: "meal-2",
            mealName: "Fried Rice & Fish",
            vendorId: "vendor-2",
            vendorName: "AccraEats Kitchen",
            pricePerUnit: 30,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c4", companyName: "Media House", quantity: 10 },
            ],
          },
        ],
      },
      {
        date: "2025-10-15",
        dayName: "Tuesday",
        meals: [
          {
            id: "meal-3",
            mealName: "Fried Rice & Fish",
            vendorId: "vendor-2",
            vendorName: "AccraEats Kitchen",
            pricePerUnit: 30,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 10 },
            ],
          },
        ],
      },
      {
        date: "2025-10-16",
        dayName: "Wednesday",
        meals: [
          {
            id: "meal-4",
            mealName: "Banku with Tilapia",
            vendorId: "vendor-3",
            vendorName: "Ghana Delights",
            pricePerUnit: 35,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c4", companyName: "Media House", quantity: 10 },
            ],
          },
        ],
      },
      {
        date: "2025-10-17",
        dayName: "Thursday",
        meals: [
          {
            id: "meal-5",
            mealName: "Waakye with Egg",
            vendorId: "vendor-1",
            vendorName: "Chef's Kitchen",
            pricePerUnit: 20,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 10 },
            ],
          },
        ],
      },
      {
        date: "2025-10-18",
        dayName: "Friday",
        meals: [
          {
            id: "meal-6",
            mealName: "Fufu with Goat Soup",
            vendorId: "vendor-3",
            vendorName: "Ghana Delights",
            pricePerUnit: 40,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c4", companyName: "Media House", quantity: 10 },
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
            id: "meal-7",
            mealName: "Jollof Rice with Chicken",
            vendorId: "vendor-1",
            vendorName: "Chef's Kitchen",
            pricePerUnit: 25,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 10 },
            ],
          },
          {
            id: "meal-8",
            mealName: "Fried Rice & Fish",
            vendorId: "vendor-2",
            vendorName: "AccraEats Kitchen",
            pricePerUnit: 30,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
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
            id: "meal-9",
            mealName: "Banku with Tilapia",
            vendorId: "vendor-3",
            vendorName: "Ghana Delights",
            pricePerUnit: 35,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              { companyId: "c4", companyName: "Media House", quantity: 10 },
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
            id: "meal-10",
            mealName: "Waakye with Egg",
            vendorId: "vendor-1",
            vendorName: "Chef's Kitchen",
            pricePerUnit: 20,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 10 },
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
            id: "meal-11",
            mealName: "Jollof Rice with Chicken",
            vendorId: "vendor-1",
            vendorName: "Chef's Kitchen",
            pricePerUnit: 25,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 10 },
            ],
          },
        ],
      },
      {
        date: "2025-10-29",
        dayName: "Tuesday",
        meals: [
          {
            id: "meal-12",
            mealName: "Fried Rice & Fish",
            vendorId: "vendor-2",
            vendorName: "AccraEats Kitchen",
            pricePerUnit: 30,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c4", companyName: "Media House", quantity: 10 },
            ],
          },
        ],
      },
      {
        date: "2025-10-30",
        dayName: "Wednesday",
        meals: [
          {
            id: "meal-13",
            mealName: "Fufu with Goat Soup",
            vendorId: "vendor-3",
            vendorName: "Ghana Delights",
            pricePerUnit: 40,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
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
            id: "meal-14",
            mealName: "Banku with Tilapia",
            vendorId: "vendor-3",
            vendorName: "Ghana Delights",
            pricePerUnit: 15,
            companyOrders: [
              { companyId: "c1", companyName: "TechHub Lagos", quantity: 10 },
              {
                companyId: "c2",
                companyName: "Fintech Solutions",
                quantity: 10,
              },
              { companyId: "c3", companyName: "Creative Agency", quantity: 10 },
            ],
          },
        ],
      },
    ],
  },
];
