<script lang="ts">
  import recommendProducts from "../../fake-data"
  import { itemsUpsell } from "../../stores"
  import UpsellItem from "./elements/upsell-item.svelte"

  itemsUpsell.set(recommendProducts)
</script>

<div style="padding: 2rem 1.5rem 3rem 1.5rem;">
  <div class="upsell-section-title">You may also like</div>

  <div class="upsell-items-container">
    {#each $itemsUpsell as product}
      <UpsellItem {...product} />
    {/each}
  </div>
</div>

<style lang="scss">
  .upsell-section-title {
    font-size: small;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .upsell-items-container {
    padding: 1rem 0 1rem 0;
    display: grid;
    grid-template-columns: auto;
    grid-auto-flow: column dense;
    justify-content: space-between;
    gap: 1rem;
    overflow-x: auto;
  }
</style>
