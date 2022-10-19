<script lang="ts">
  import { itemsUpsell } from "../../stores"
  import UpsellItem from "./elements/upsell-item.svelte"
</script>

<div class="upsell-section-title">You may also like</div>

<div class="upsell-items-container">
  {#each $itemsUpsell as product}
    <UpsellItem {...product} />
  {/each}
</div>

<style lang="scss">
  .upsell-section-title {
    font-size: large;
    text-align: center;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .upsell-items-container {
    padding: 1rem;
    display: grid;
    grid-template-rows: auto;
    grid-auto-flow: row dense;
    justify-items: center;
    gap: 2rem;
  }
</style>
