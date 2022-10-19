<script>
  import { cartLength } from "../../stores"
  import GoToCheckoutButton from "../cart-cta/elements/go-to-checkout-button.svelte"
  import ContinueShoppingBtn from "./elements/continue-shopping-btn.svelte"
  import ContinueShoppingLink from "./elements/continue-shopping-link.svelte"
  import TotalCartCost from "./elements/total-cart-cost.svelte"
</script>

<div class="cart-cta-wrapper">
  {#if $cartLength > 0}
    <TotalCartCost />
    <GoToCheckoutButton />
    <ContinueShoppingLink />
  {:else}
    <ContinueShoppingBtn />
  {/if}
</div>

<style lang="scss">
  .cart-cta-wrapper {
    display: block;
    background-color: white;
    padding: 1rem 0 0 0;
  }
</style>
