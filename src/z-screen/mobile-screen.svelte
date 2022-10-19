<script>
  import CartCta from "../modules/cart-cta/cart-cta.svelte"
  import CartHeader from "../modules/cart-header/cart-header.svelte"
  import CartRewards from "../modules/cart-rewards/cart-rewards.svelte"
  import CartSummary from "../modules/cart-summary/cart-summary.svelte"
  import CountdownTimer from "../modules/countdown-timer/countdown-timer.svelte"
  import DiscountCode from "../modules/discount-code/discount-code.svelte"
  import EstimateShipping from "../modules/estimate-shipping/estimate-shipping.svelte"
  import ItemsInCart from "../modules/items-in-cart/items-in-cart.svelte"
  import UpsellItems from "../modules/upsell-items/upsell-items.svelte"
  import OrderNote from "../modules/order-note/order-note.svelte"
  import { itemsInCart } from "../stores"
  import { closeFrame } from "../utils-functions/close-frame"
  import DividerSection from "../utils-components/divider-section.svelte"
  import FetchCart from "../fetch-cart.svelte"

  let cartLength

  $: {
    cartLength = $itemsInCart.length
  }
</script>

<div class="cart-background" on:click={closeFrame} />

<div class="cart-container">
  <div class="cart-header">
    <CartHeader />
  </div>

  {#if cartLength > 0}
    <div style="border-bottom:0.5px solid rgba(0, 0, 0, 0.1);">
      <CountdownTimer />
    </div>
  {:else}
    <div />
  {/if}

  <div class="cart-body">
    <CartRewards />

    <DividerSection />

    <ItemsInCart />
    <DividerSection />

    <UpsellItems />
    <DividerSection />

    <EstimateShipping />

    <DividerSection />

    <OrderNote />

    <DividerSection />

    <DiscountCode />

    <DividerSection />

    <CartSummary />
    <DividerSection />

    <div style="text-align: center; margin: 2.5rem 0 3rem 0">
      <span style="font-size: larger;">✌️</span>
      <br />
      <span style="font-size: small; font-weight: 600;"
        >Have a brilliant day</span
      >
    </div>
  </div>
  <div id="cart-footer" class="cart-footer">
    <CartCta />
  </div>
</div>

<FetchCart />

<style lang="scss">
  .cart-background {
    background-color: transparent;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow-y: auto;
  }

  .cart-container {
    // background-color: #f8f8f8;
    background-color: white;
    width: 100%;
    position: fixed;
    right: 0;
    height: 100%;

    display: grid;
    grid-template-rows: auto auto 1fr auto;
  }

  .cart-header {
    padding: 0.25rem 1.5rem 0.25rem 1.5rem;
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .cart-body {
    overflow-y: auto;
  }

  .cart-footer {
    background-color: white;
    padding: 0.5rem 1.5rem 1.5rem 1.5rem;
    box-shadow: rgb(0, 0, 0 / 8%) 0px -0.125rem 0.25rem;
  }
</style>
