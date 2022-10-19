<script lang="ts">
  import { itemsInCart, latestItemAddedToCart } from "../../../stores"
  import ItemImage from "./item-image.svelte"
  import ItemPrices from "./item-prices.svelte"
  import ItemQuantityTitle from "./item-quantity-title.svelte"
  import ItemRemoveBtn from "./item-remove-btn.svelte"
  import ItemVariantTitle from "./item-variant-title.svelte"
  import ProductTitle from "./product-title.svelte"
  export let itemTitle: string
  export let variantTitle: string
  export let originPrice: number
  export let discountedPrice: number
  export let imgUrl: string
  export let imgAlt: string
  export let itemId: string
  export let quantity: number
  export let productUrl: string

  const handleQuantityChange = async () => {
    if (quantity < 0 || !quantity) {
      quantity = 1
    }

    let latestAddedItem = {}

    const updateItemInCart = $itemsInCart.map((item) => {
      if (item.itemId === itemId) {
        item.quantity = quantity
        latestAddedItem = item

        const updateQuantityMessage = JSON.stringify({
          quantity: item.quantity,
          id: `${item.itemId}`,
        })

        window.parent.postMessage(updateQuantityMessage, "*")
      }

      return item
    })

    itemsInCart.set(updateItemInCart)

    latestItemAddedToCart.set(latestAddedItem)

    // lastestAmountChanges.set(quantity * discountedPrice ? discountedPrice : originPrice);

    // console.log($lastestAmountChanges);
  }
</script>

<div class="cart-item">
  <ItemImage {imgUrl} {imgAlt} />
  <div class="item-main-info-wrapper">
    <div class="item-main-and-variant-titles">
      <ProductTitle {itemTitle} {productUrl} />
      <ItemVariantTitle {variantTitle} />
    </div>

    <div>
      <ItemPrices {originPrice} {discountedPrice} {quantity} />
    </div>
  </div>

  <div class="item-quantity-div">
    <ItemQuantityTitle />
    <input
      class="item-quality-input"
      type="number"
      bind:value={quantity}
      min="1"
      on:change={handleQuantityChange}
    />
    <ItemRemoveBtn thisItemId={itemId} />
  </div>
</div>

<style lang="scss">
  .cart-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    padding: 1.5rem 0 1.5rem 0;
  }

  .item-main-info-wrapper {
    display: grid;
    align-content: space-around;
  }

  .item-main-and-variant-titles {
    display: grid;
    justify-content: start;
    align-content: space-around;
    gap: 5px;
  }

  .item-quantity-div {
    display: grid;
    justify-items: end;
    align-content: space-around;
    gap: 10px;
  }

  .item-quality-input {
    max-width: 50px;
    text-align: center;
    font-size: small;
  }
</style>
