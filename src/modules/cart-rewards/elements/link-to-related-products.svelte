<script lang="ts">
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"
  import { addedItemToCartStatus } from "../../../stores"

  $: {
    if ($addedItemToCartStatus === true) {
      setTimeout(() => {
        addedItemToCartStatus.set(false)
      }, 3000)
    }
  }

  onMount(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  })
</script>

<div class="recommend-product-link" transition:fade>
  <a href="#cart-footer">Recommend products for you</a>
</div>

<style lang="scss">
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  .recommend-product-link {
    display: inline;
    color: rgba(0, 0, 0, 0.6);
    font-size: small;
    cursor: pointer;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  }
</style>
