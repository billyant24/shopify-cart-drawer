<script lang="ts">
  import { loadingToCheckout } from "../../../stores"
  import DotsLoader from "../../../utils-components/dots-loader.svelte"

  function goToCheckout() {
    loadingToCheckout.set(true)

    setTimeout(() => {
      loadingToCheckout.set(false)
    }, 90000)
  }
</script>

<button class="go-to-checkout-btn" on:click={goToCheckout}>
  {#if $loadingToCheckout}
    <div class="btn-content-container">
      <DotsLoader />
    </div>
  {:else}
    <div class="btn-content-container">
      <span>Checkout</span>
    </div>
  {/if}
</button>

<style lang="scss">
  .go-to-checkout-btn {
    width: 100%;
    background-color: black;
    font-weight: 600;
    color: white;
    border: 1px solid;
    cursor: pointer;
    font-size: large;
    margin: 1rem 0 1rem 0;
    height: 50px;
  }

  .go-to-checkout-btn:hover {
    background-color: rgba($color: #000000, $alpha: 0.8);
  }

  .btn-content-container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: medium;
  }
</style>
