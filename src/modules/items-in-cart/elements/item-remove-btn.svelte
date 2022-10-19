<script lang="ts">
  import { itemsInCart } from "../../../stores"

  export let thisItemId: string

  const handleRemove = () => {
    const confirmRemoved = confirm(`Remove this item?`)

    if (confirmRemoved === true) {
      itemsInCart.set($itemsInCart.filter((item) => item.itemId !== thisItemId))

      const removeItemMessage = JSON.stringify({
        quantity: 0,
        id: `${thisItemId}`,
      })

      window.parent.postMessage(removeItemMessage, "*")
    }
  }
</script>

<div class="item-remove" on:click={handleRemove} item-id={thisItemId}>
  Remove
</div>

<style lang="scss">
  .item-remove {
    cursor: pointer;
    font-size: xx-small;
    font-weight: 500;
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.6);
  }
</style>
