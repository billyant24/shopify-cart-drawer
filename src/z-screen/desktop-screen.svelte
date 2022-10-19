<script>
  import CartCta from "../modules/cart-cta/cart-cta.svelte"
  import CartHeader from "../modules/cart-header/cart-header.svelte"
  import CartRewards from "../modules/cart-rewards/cart-rewards.svelte"
  import CartSummary from "../modules/cart-summary/cart-summary.svelte"
  import CountdownTimer from "../modules/countdown-timer/countdown-timer.svelte"
  import DiscountCode from "../modules/discount-code/discount-code.svelte"
  import ItemsInCart from "../modules/items-in-cart/items-in-cart.svelte"
  import OrderNote from "../modules/order-note/order-note.svelte"
  import UpsellItemsVertial from "../modules/upsell-items/upsell-items-vertial.svelte"
  import DividerSection from "../utils-components/divider-section.svelte"
  import EstimateShipping from "../modules/estimate-shipping/estimate-shipping.svelte"
  import PoweredBySlickCart from "../utils-components/powered-by-slick-cart.svelte"
  import { closeFrame } from "../utils-functions/close-frame"
  import { itemsInCart } from "../stores"
  import FetchCart from "../fetch-cart.svelte"

  let cartLength

  $: {
    cartLength = $itemsInCart.length
  }
</script>

<div class="cart-background" on:click={closeFrame} />

<div class="cart-container">
  <div class="cart-left-col">
    <div style="flex: 1">
      <UpsellItemsVertial />
    </div>
    <div style="margin: 2.5rem 0 1.5rem 0;" />
    <PoweredBySlickCart />
    <div style="margin: 1rem 0 0rem 0;" />
  </div>

  <div class="cart-right-col">
    <div class="cart-header">
      <CartHeader />
    </div>

    <div class="cart-countdown">
      {#if cartLength > 0}
        <CountdownTimer />
      {:else}
        <div />
      {/if}
    </div>

    <div class="cart-body">
      <CartRewards />
      <DividerSection />

      <ItemsInCart />

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
</div>

<FetchCart />

<style lang="scss">
  .cart-background {
    // background-color: transparent;
    background-color: darkgrey;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow-y: auto;
  }

  .cart-container {
    background-color: white;
    width: 50%;
    position: fixed;
    right: 0;
    height: 100%;

    display: grid;
    grid-template-columns: 38% 62%;
  }

  .cart-right-col {
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    overflow-y: auto;
  }

  .cart-left-col {
    background-color: rgba(185, 185, 185, 0.1);
    overflow-y: auto;
    padding: 2rem 0rem 1rem 0rem;
    display: flex;
    flex-direction: column;
  }

  .cart-header {
    padding: 0.25rem 1.5rem 0.25rem 1.5rem;
    background-color: white;
    // border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #d3d3d3;
  }

  .cart-countdown {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  }

  .cart-body {
    overflow-y: auto;
  }

  .cart-footer {
    background-color: white;
    padding: 0.5rem 1.5rem 1.5rem 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0px -0.125rem 0.25rem;
  }
</style>
