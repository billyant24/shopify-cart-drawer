<script lang="ts">
  let freeShipping = false

  setTimeout(() => {
    freeShipping = true
  }, 10000)
</script>

<div class="cost-calculate">
  <div class="cost-text">Shipping</div>
  <div class="cost-value">
    {#if freeShipping}
      <span class="free-shipping-value">FREE</span>
    {:else}
      <span class="calculated-shipping-value">Calculated at checkout</span>
    {/if}
  </div>
</div>

<style lang="scss">
  .cost-calculate {
    display: flex;
    justify-content: space-between;
    font-size: small;
    padding: 0.3rem 0;
  }

  .free-shipping-value {
    font-size: small;
  }

  .calculated-shipping-value {
    font-weight: 400;
    font-size: small;
    color: rgba(0, 0, 0, 0.6);
  }
</style>
