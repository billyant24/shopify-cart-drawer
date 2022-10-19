<script lang="ts">
  export let savingCost: number = 0
</script>

<div class="saving">
  <div class="cost-text">Savings</div>
  {#if savingCost}
    <div class="cost-value">${savingCost}</div>
  {:else}
    <div class="cost-value">--</div>
  {/if}
</div>

<style lang="scss">
  .saving {
    display: flex;
    justify-content: space-between;
    color: #047857;
    font-size: small;
    padding: 0.3rem 0;
  }

  // .cost-value {
  // 	color: rgba(0, 0, 0, 0.6);
  // }
</style>
