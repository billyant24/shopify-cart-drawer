<script>
  import { fade } from "svelte/transition"
  import { addedItemToCartStatus } from "../stores"

  $: {
    if ($addedItemToCartStatus === true) {
      setTimeout(() => {
        addedItemToCartStatus.set(false)
      }, 1500)
    }
  }
</script>

{#if $addedItemToCartStatus}
  <div class="added-to-cart-status" transition:fade>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      height="16px"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
    <div>Added to cart</div>
  </div>
{/if}

<style>
  .added-to-cart-status {
    display: flex;
    color: #047857;
    font-size: small;
    align-items: center;
    padding: 1.5rem 0 0.5rem 0;
  }
</style>
