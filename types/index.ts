// Common types for the delivery application

export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "driver" | "customer";
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  id: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface DeliveryItem {
  id: string;
  name: string;
  quantity: number;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  fragile: boolean;
  value: number;
}

export interface Delivery {
  id: string;
  customerId: string;
  driverId?: string;
  items: DeliveryItem[];
  pickupAddress: Address;
  deliveryAddress: Address;
  status: DeliveryStatus;
  priority: DeliveryPriority;
  scheduledDate: Date;
  estimatedDeliveryTime?: Date;
  actualDeliveryTime?: Date;
  totalValue: number;
  deliveryFee: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type DeliveryStatus =
  | "pending"
  | "assigned"
  | "picked_up"
  | "in_transit"
  | "delivered"
  | "cancelled"
  | "failed";

export type DeliveryPriority = "low" | "normal" | "high" | "urgent";

export interface Driver {
  id: string;
  userId: string;
  licenseNumber: string;
  vehicleType: VehicleType;
  vehicleCapacity: number;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  isAvailable: boolean;
  rating: number;
  totalDeliveries: number;
}

export type VehicleType = "bike" | "car" | "van" | "truck";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SearchFilters {
  query?: string;
  status?: DeliveryStatus;
  priority?: DeliveryPriority;
  dateFrom?: Date;
  dateTo?: Date;
  driverId?: string;
}

export interface DashboardStats {
  totalDeliveries: number;
  pendingDeliveries: number;
  completedDeliveries: number;
  activeDrivers: number;
  revenue: number;
  avgDeliveryTime: number;
}
