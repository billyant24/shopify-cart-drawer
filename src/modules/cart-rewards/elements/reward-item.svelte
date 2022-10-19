<script lang="ts">
  import * as ShopifyThemeCurrency from "@shopify/theme-currency"
  import { fade } from "svelte/transition"
  import { subTotalCartValue } from "../../../stores"
  import RewardProgressBar from "./reward-progress-bar.svelte"

  export let targetValue: number
  export let rewardName: string
  export let itemIdex: number

  let awayValueDisplay: string
  let targetValueDisplay: string

  $: currentValue = ($subTotalCartValue * 100) / targetValue

  $: awayValue = targetValue - $subTotalCartValue

  $: {
    if (currentValue >= 100) {
      awayValue = 0
    }

    awayValueDisplay = ShopifyThemeCurrency.formatMoney(awayValue)

    targetValueDisplay = ShopifyThemeCurrency.formatMoney(targetValue)
  }
</script>

<div class="reward-item" item-index={itemIdex}>
  {#if currentValue === 0}
    <div class="reward-text">
      <span class="target-value">{targetValueDisplay}</span>
      away from {rewardName}
    </div>
    <div class="reward-content-progress-wrapper">
      <RewardProgressBar value={currentValue} />
      <div style="text-align: end;">
        <span class="reward-target">{targetValueDisplay}</span>
      </div>
    </div>
  {:else if awayValue === 0}
    <div transition:fade>
      🎉 <span class="unlocked-text">{rewardName} unlocked!</span>
    </div>
  {:else}
    <div class="reward-text" transition:fade>
      <span class="target-value">{awayValueDisplay}</span>
      away from {rewardName}
    </div>
    <div class="reward-content-progress-wrapper">
      <RewardProgressBar value={currentValue} />
      <div style="text-align: end;">
        <span class="reward-target">{targetValueDisplay}</span>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .reward-item {
    display: grid;
    gap: 1rem;
  }

  .target-value {
    display: inline-block;
    font-weight: 500;
  }

  .reward-text {
    display: block;
    font-size: small;
  }

  .unlocked-text {
    font-size: small;
    font-weight: 600;
  }

  .reward-content-progress-wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: 75% auto;
    align-items: center;
  }

  .reward-target {
    font-size: small;
    font-weight: 600;
    background-color: #e6e6e6;
    padding: 6px 10px;
    border-radius: 50px;
  }
</style>
