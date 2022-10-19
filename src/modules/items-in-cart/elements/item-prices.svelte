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

<div class="item-prices">
  {#if !discountedPrice || originPrice === discountedPrice}
    <span class="item-origin-price">{formattedItemTotalPrice}</span>
  {:else}
    <span class="item-origin-price">{formattedItemTotalPrice}</span>
    <span class="item-compared-at-price">{formattedItemDiscountedPrice}</span>
  {/if}
</div>

<style lang="scss">
  .item-prices {
    width: 30%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 8px;
  }

  .item-compared-at-price {
    font-size: small;
    text-decoration: line-through;
    color: rgb(116, 116, 116);
  }

  .item-origin-price {
    display: inline-block;
    font-size: smaller;
    font-weight: 600;
  }
</style>
