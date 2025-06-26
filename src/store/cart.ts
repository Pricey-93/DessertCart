import { ref } from "vue";
import type { CartItem, Product } from "../types";

const cartItems = ref<CartItem[]>([]);

export function useCart() {
  function add(cartItem: CartItem): void {
    cartItems.value.push(cartItem);
  }

  function remove(index: number): void {
    cartItems.value.splice(index, 1);
  }

  function calculateOrderTotal(): number {
    return cartItems.value.reduce((orderTotal, item) => orderTotal + item.price * item.quantity, 0);
  }

  function incrementQuantity(productName: string): void {
    const match = cartItems.value.find(item => item.name === productName);
    if (match) {
      match.quantity += 1;
    }
  }

   function decrementQuantity(productName: string): void {
    const match = cartItems.value.find(item => item.name === productName);
    if (match) {
      match.quantity > 1 ? match.quantity -= 1 : 1;
    }
  }

  function createCartItem(product: Product): CartItem {
    return {
      image: {thumbnail: product.image.thumbnail},
      name: product.name,
      price: product.price,
      quantity: 1
    } 
  }

  return {
    cartItems,
    add,
    remove,
    calculateOrderTotal,
    createCartItem,
    incrementQuantity,
    decrementQuantity
  };
}
