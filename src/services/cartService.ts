import type { CartItem } from "../types/cart";

const CART_KEY = "my_cart";

export const loadCart = (): CartItem[] => {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading cart:", error);
    return [];
  }
};

export const saveCart = (cart: CartItem[]): void => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart:", error);
  }
};

export const clearCart = (): void => {
  try {
    localStorage.removeItem(CART_KEY);
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};
