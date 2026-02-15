export type OrderStatus = "Ready" | "Preparing";

export interface Order {
  name: string;
  orders: number;
  status: OrderStatus;
}
