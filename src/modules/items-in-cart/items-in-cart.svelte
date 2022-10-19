<script lang="ts">
  import CartItem from "./elements/cart-item.svelte"
  import CartItemsEmpty from "./elements/cart-items-empty.svelte"
  import DetailsDisclosure from "../../utils-components/details-disclosure.svelte"
  import AddedToCartStatus from "../../utils-components/added-to-cart-status.svelte"
  import DividerItems from "../../utils-components/divider-items.svelte"
  import { cartLength, itemsInCart } from "../../stores"

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

<div class="items-in-cart-container">
  <DetailsDisclosure
    disclosureName={`Items in cart (${$cartLength})`}
    isOpen={true}
  >
    {#if $itemsInCart.length === 0}
      <div style="padding: 10rem 0;">
        <CartItemsEmpty />
      </div>
    {:else}
      <AddedToCartStatus />
      {#each $itemsInCart as product, index}
        {#if index === 0}
          <CartItem {...product} />
        {:else}
          <DividerItems />
          <CartItem {...product} />
        {/if}
      {/each}
    {/if}
  </DetailsDisclosure>
</div>

<style lang="scss">
  .items-in-cart-container {
    background: white;
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
</style>
