<script>
  import { cartLength, itemsInCart } from "$lib/stores"

  $: {
    if (!$itemsInCart.length) $cartLength = 0
    $cartLength = $itemsInCart.reduce(
      (startValue, currentItem) => startValue + currentItem.quantity,
      0
    )

    const cartLengthmessage = JSON.stringify({
      cartLength: $cartLength,
    })
    window.parent.postMessage(cartLengthmessage, "*")
  }
</script>

<div class="cart-length">Total {$cartLength} item(s) in cart</div>

<style lang="scss">
  .cart-length {
    font-size: medium;
    font-weight: 600;
  }
</style>
