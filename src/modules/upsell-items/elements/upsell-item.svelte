<script lang="ts">
  import UpsellItemImage from "./upsell-item-image.svelte"
  import UpsellItemPrices from "./upsell-item-prices.svelte"
  import UpsellItemTitle from "./upsell-item-title.svelte"

  export let itemId: string
  export let imgUrl: string
  export let imgAlt: string = "product-image-alt"
  export let originPrice: number
  export let discountedPrice: number
  export let itemTitle: string
  export let quantity: number = 1
  export let productUrl: string = "https://www.google.com/"
</script>

<div class="upsell-item-wrapper">
  <UpsellItemImage {imgUrl} {imgAlt} {itemId} />
  <div class="item-content">
    <UpsellItemTitle {itemTitle} {productUrl} />
    <div>
      <UpsellItemPrices {originPrice} {discountedPrice} {quantity} />
    </div>
  </div>
</div>

<style lang="scss">
  .upsell-item-wrapper {
    // display
    display: inline-flex;
    flex-direction: column;
    width: 8rem;

    // box
    border-radius: 0 0 5px 5px;
    padding-bottom: 0.5rem;

    // colors
    // background-color: white;
  }

  .item-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
</style>
