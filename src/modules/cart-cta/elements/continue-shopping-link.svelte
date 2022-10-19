<script lang="ts">
  import { loadingToCheckout } from "../../../stores"

  const handleClick = () => {
    const message = JSON.stringify({
      message: "close-iframe",
    })
    window.parent.postMessage(message, "*")
  }
</script>

<div class="continue-shopping-container">
  {#if $loadingToCheckout}
    Processing to checkout
  {:else}
    <div class="continue-shopping" on:click={handleClick}>
      Continue shopping
    </div>
  {/if}
</div>

<style lang="scss">
  .continue-shopping-container {
    font-size: small;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 600;
    text-align: center;
  }

  .continue-shopping {
    display: inline-block;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  }

  .continue-shopping:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  }
</style>
