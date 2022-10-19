<script lang="ts">
  import * as ShopifyThemeCurrency from "@shopify/theme-currency"
  import { itemsInCart, subTotalCartValue } from "../../../stores"

  $: {
    $subTotalCartValue = $itemsInCart.reduce((startValue, currentItem) => {
      const newValue =
        Number.parseFloat(currentItem.originPrice) * currentItem.quantity
      return startValue + newValue
    }, 0)
  }
</script>

<div class="cost-calculate">
  <div class="cost-text">Estimated Total</div>
  <div class="cost-value">
    {ShopifyThemeCurrency.formatMoney($subTotalCartValue, null)}
  </div>
</div>

<style lang="scss">
  .cost-calculate {
    display: flex;
    justify-content: space-between;
    font-size: small;
    padding: 0.3rem 0;
  }

  // .cost-value {
  // }
</style>
