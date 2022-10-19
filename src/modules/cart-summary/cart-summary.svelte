<script>
  import DetailsDisclosure from "../../utils-components/details-disclosure.svelte"
  import ShippingCost from "./elements/shipping-cost.svelte"
  import SubtotalCost from "./elements/subtotal-cost.svelte"
  import TotalSavingCost from "./elements/total-saving-cost.svelte"
</script>

<div class="cart-summary-wrapper">
  <DetailsDisclosure disclosureName="Cart summary" isOpen={true}>
    <div style="padding-bottom: 1rem;" />
    <TotalSavingCost />
    <ShippingCost />
    <SubtotalCost />
  </DetailsDisclosure>
</div>

<style lang="scss">
  .cart-summary-wrapper {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
</style>
