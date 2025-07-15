// Application constants

export const APP_NAME = "Delivery";
export const APP_VERSION = "1.0.0";
export const APP_DESCRIPTION = "Modern delivery management system";

// API endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REGISTER: "/auth/register",
    REFRESH: "/auth/refresh",
  },
  USERS: "/users",
  DELIVERIES: "/deliveries",
  DRIVERS: "/drivers",
  ADDRESSES: "/addresses",
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  USER: "delivery_user",
  TOKEN: "delivery_token",
  THEME: "delivery_theme",
  LANGUAGE: "delivery_language",
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// Validation
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^(\+48|0048|48)?[\s-]?(\d{3}[\s-]?\d{3}[\s-]?\d{3})$/,
  POSTAL_CODE_REGEX: /^\d{2}-\d{3}$/,
  MIN_PASSWORD_LENGTH: 8,
  MAX_NAME_LENGTH: 50,
  MAX_ADDRESS_LENGTH: 100,
} as const;

// Time constants
export const TIME = {
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,
} as const;

// Delivery status options
export const DELIVERY_STATUS_OPTIONS = [
  { value: "pending", label: "Oczekujące" },
  { value: "assigned", label: "Przydzielone" },
  { value: "picked_up", label: "Odebrane" },
  { value: "in_transit", label: "W drodze" },
  { value: "delivered", label: "Dostarczone" },
  { value: "cancelled", label: "Anulowane" },
  { value: "failed", label: "Nieudane" },
] as const;

// Priority options
export const DELIVERY_PRIORITY_OPTIONS = [
  { value: "low", label: "Niski" },
  { value: "normal", label: "Normalny" },
  { value: "high", label: "Wysoki" },
  { value: "urgent", label: "Pilny" },
] as const;

// Vehicle types
export const VEHICLE_TYPE_OPTIONS = [
  { value: "bike", label: "Rower" },
  { value: "car", label: "Samochód" },
  { value: "van", label: "Furgonetka" },
  { value: "truck", label: "Ciężarówka" },
] as const;

// Theme
export const THEME_OPTIONS = [
  { value: "light", label: "Jasny" },
  { value: "dark", label: "Ciemny" },
  { value: "system", label: "System" },
] as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  SM: "640px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
  "2XL": "1536px",
} as const;

// Colors
export const COLORS = {
  PRIMARY: "#3b82f6",
  SECONDARY: "#64748b",
  SUCCESS: "#10b981",
  WARNING: "#f59e0b",
  ERROR: "#ef4444",
  INFO: "#06b6d4",
} as const;
