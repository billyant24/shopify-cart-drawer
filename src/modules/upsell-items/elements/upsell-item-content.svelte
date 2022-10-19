<script lang="ts">
  import ItemPrices from "../../items-in-cart/elements/item-prices.svelte"
  import ItemVariantTitle from "../../items-in-cart/elements/item-variant-title.svelte"
  import ProductTitle from "../../items-in-cart/elements/product-title.svelte"
  import AddUpsellItemToCartBtn from "./add-upsell-item-to-cart-btn.svelte"
  export let originPrice: number
  export let discountedPrice: number
  export let itemTitle: string
  export let variantTitle: string
  export let thisItemId: string
</script>

<div class="upsell-item-content-wrapper">
  <div class="upsell-item-content-column-1">
    <div class="upsell-item-title-wrapper">
      <ProductTitle {itemTitle} />
      <ItemVariantTitle {variantTitle} />
    </div>

    <div class="upsell-item-prices">
      <ItemPrices {originPrice} {discountedPrice} />
    </div>
  </div>

  <div class="upsell-item-content-column-2">
    <AddUpsellItemToCartBtn {thisItemId} />
  </div>
</div>

<style lang="scss">
  .upsell-item-content-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 1rem;
  }

  .upsell-item-content-column-1 {
    display: grid;
    align-content: space-between;
    // grid-template-columns: 20% 80%;
  }

  .upsell-item-content-column-2 {
    display: grid;
    place-items: end;
  }

  .upsell-item-title-wrapper {
    display: grid;
    justify-content: start;
    gap: 3px;
  }

  .upsell-item-prices {
    display: flex;
    justify-content: space-between;
  }
</style>
