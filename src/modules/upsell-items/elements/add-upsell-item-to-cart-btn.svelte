<script lang="ts">
  import {
    addedItemToCartStatus,
    itemsInCart,
    itemsUpsell,
  } from "../../../stores"

  export let thisItemId: string

  const handleAddUpsellItemToCart = () => {
    const thisItem = $itemsUpsell.find((item) => item.itemId === thisItemId)
    itemsInCart.set([thisItem, ...$itemsInCart])
    addedItemToCartStatus.set(true)

    const addUpsellItemToCartMessage = JSON.stringify({
      message: "add-upsell-item-to-cart",
      id: thisItemId,
    })

    window.parent.postMessage(addUpsellItemToCartMessage, "*")

    const upsellItemsLeft = $itemsUpsell.filter((item) => item !== thisItem)
    itemsUpsell.set(upsellItemsLeft)
  }
</script>

<button
  class="add-upsell-item-to-cart-btn"
  on:click={handleAddUpsellItemToCart}
  item-id={thisItemId}>Add To Cart</button
>

<style lang="scss">
  .add-upsell-item-to-cart-btn {
    display: block;
    background-color: black;
    border: none;
    cursor: pointer;
    font-size: smaller;
    padding: 10px 20px;
    font-weight: 500;
    color: white;
    margin-top: 8px;
  }

  .add-upsell-item-to-cart-btn:hover {
    color: white;
    background-color: rgba($color: #000000, $alpha: 0.8);
  }
</style>
