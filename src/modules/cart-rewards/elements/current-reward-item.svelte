<script lang="ts">
  import { subTotalCartValue, theRewards } from "../../../stores"

  import CurrentAwayValue from "./current-away-value.svelte"
  import LockCircle from "./lock-circle.svelte"
  import UnlockCircle from "./unlock-circle.svelte"

  $: largestItem = $theRewards.reduce((prev, curr) =>
    prev.targetValue > curr.targetValue ? prev : curr
  )

  $: largestValue = largestItem.targetValue

  $: onePercentValue = largestValue / 100

  $: currentPercentValue = $subTotalCartValue / onePercentValue

  $: {
    if (currentPercentValue > 100) currentPercentValue = 100
    if (currentPercentValue < 0) currentPercentValue = 0
  }
</script>

<div class="reward-bar-container">
  <CurrentAwayValue currentCartValue={$subTotalCartValue} />
  <div class="progress-bar-container">
    <span class="progress-bar" style="width: {currentPercentValue}%;" />
  </div>
  <div class="progress-circles-container">
    {#each $theRewards as reward}
      <div>
        {#if reward.targetValue > $subTotalCartValue}
          <LockCircle name={reward.name} />
        {:else}
          <UnlockCircle name={reward.name} />
        {/if}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .reward-bar-container {
    display: grid;
    gap: 1.25rem;
    position: relative;
    margin-bottom: 2rem;
  }

  .progress-bar-container {
    background-color: #e6e6e6;
    border-radius: 20px;
    height: 5px;
  }

  .progress-bar {
    display: block;
    height: 100%;
    border-radius: inherit;
    background-color: #047857;
    transition: width 0.2s ease-in-out 0s;
    overflow: hidden;
  }

  .progress-circles-container,
  .progress-bar-container {
    display: flex;
    width: 100%;
  }

  .progress-circles-container {
    box-sizing: border-box;
    justify-content: space-between;
    // padding: 0 2% 0 3%;
  }
</style>
