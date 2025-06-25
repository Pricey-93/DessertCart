import { ref } from "vue";
import type { CartItem } from "../types";

const cartItems = ref<CartItem[]>([
  {
    "image": {
      "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
    },
    "name": "Waffle with Berries",
    "price": 6.5,
    "quantity": 2
  },
  {
    "image": {
      "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
    },
    "name": "Vanilla Bean Crème Brûlée",
    "price": 7,
    "quantity": 5
  }
]);

export function useCart() {
  function add(cartItem: CartItem) {
    cartItems.value.push(cartItem);
  }

  function remove(index: number) {
    cartItems.value.splice(index, 1);
  }

  return {
    cartItems,
    add,
    remove,
  };
}
