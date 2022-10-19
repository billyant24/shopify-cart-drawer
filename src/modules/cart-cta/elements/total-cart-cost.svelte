<script lang="ts">
  import * as ShopifyThemeCurrency from "@shopify/theme-currency"
  import { cartCurrency, subTotalCartValue } from "../../../stores"

  let totalCartCost: number

  $: totalCartCost = $subTotalCartValue
</script>

<div class="cart-total-amount">
  <div>Total</div>
  <div class="wrapper">
    <span class="currency">{$cartCurrency}</span>
    <span class="total-price-value"
      >{ShopifyThemeCurrency.formatMoney(totalCartCost, null)}</span
    >
  </div>
</div>

<style lang="scss">
  .cart-total-amount {
    display: flex;
    justify-content: space-between;
    font-size: large;
  }

  .wrapper {
    display: flex;
    align-items: center;
  }
  .currency {
    font-size: small;
    margin-right: 0.5rem;
  }

  .total-price-value {
    font-size: large;
    font-weight: 600;
  }
</style>
