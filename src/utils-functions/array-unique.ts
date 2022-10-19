import type { ICartItem } from "../types/cart-item.interface"

function arrayUnique(cartItems: ICartItem[]): ICartItem[] {
  const array = cartItems.concat()
  for (let i = 0; i < array.length; ++i) {
    for (let j = i + 1; j < array.length; ++j) {
      if (array[i].itemId === array[j].itemId) {
        array.splice(j--, 1)
      }
    }
  }

  return array
}

export default arrayUnique
