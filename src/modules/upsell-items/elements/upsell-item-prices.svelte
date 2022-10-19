<script lang="ts">
  import * as ShopifyThemeCurrency from "@shopify/theme-currency"
  export let originPrice: number
  export let discountedPrice: number
  export let quantity: number = 1

  $: formattedItemTotalPrice = ShopifyThemeCurrency.formatMoney(
    quantity * originPrice
  )

  $: formattedItemDiscountedPrice = ShopifyThemeCurrency.formatMoney(
    quantity * discountedPrice
  )
</script>

<div class="upsell-item-prices">
  {#if !discountedPrice || originPrice === discountedPrice}
    <div class="item-origin-price-only">From {formattedItemTotalPrice}</div>
  {:else}
    <span class="item-origin-price">From {formattedItemTotalPrice}</span>
    <span class="item-compared-at-price">{formattedItemDiscountedPrice}</span>
  {/if}
</div>

<style lang="scss">
  .upsell-item-prices {
    // width: 30%;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 8px;
    margin-top: 0.375rem;
  }

  .item-compared-at-price {
    font-size: x-small;
    text-decoration: line-through;
    color: rgb(116, 116, 116);
  }

  .item-origin-price {
    display: inline-block;
    font-size: x-small;
    color: rgb(2, 2, 2);
  }

  .item-origin-price-only {
    display: inline-block;
    font-size: x-small;
    color: rgb(2, 2, 2);
  }
</style>
