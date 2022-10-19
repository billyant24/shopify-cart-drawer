<script lang="ts">
  import * as ShopifyThemeCurrency from "@shopify/theme-currency"
  import { fade } from "svelte/transition"
  import { theRewards } from "../../../stores"
  import { checkPrevious } from "../../../utils-functions/check-previous"

  export let currentCartValue

  let awayValue: number
  let awayValueDisplay: string
  let currentIndex = 0

  let currentRewardItem = $theRewards[currentIndex]

  const [currentCartTotal, previousCartTotal] = checkPrevious(currentCartValue)

  $: $currentCartTotal = currentCartValue

  $: {
    let change = $currentCartTotal - $previousCartTotal
    if (change > 0) {
      if (
        currentIndex !== $theRewards.length - 1 &&
        $currentCartTotal >= currentRewardItem.targetValue
      ) {
        currentIndex += 1
        currentRewardItem = $theRewards[currentIndex]
      }

      if (currentIndex === $theRewards.length - 1) {
        currentIndex = $theRewards.length - 1
        currentRewardItem = $theRewards[currentIndex]
      }
    }

    if (change < 0) {
      if ($currentCartTotal < $theRewards[currentIndex - 1].targetValue) {
        currentIndex -= 1
        currentRewardItem = $theRewards[currentIndex]
      }

      if (currentIndex === 0) {
        currentIndex = 0
        currentRewardItem = $theRewards[0]
      }
    }
  }

  $: if (currentRewardItem.targetValue) {
    awayValue = currentRewardItem.targetValue - currentCartValue
    if (awayValue < 0) awayValue = 0
    awayValueDisplay = ShopifyThemeCurrency.formatMoney(awayValue)
  }
</script>

{#if awayValue === 0 && currentIndex === $theRewards.length - 1}
  <div transition:fade>
    🎉 <span class="unlocked-text"
      >Congrats! You have unlocked all rewards!</span
    >
  </div>
{:else}
  <div class="reward-text" transition:fade>
    <span class="target-value">{awayValueDisplay}</span>
    away from {currentRewardItem.name}
  </div>
{/if}

<style lang="scss">
  .target-value {
    display: inline-block;
    font-weight: 500;
  }

  .reward-text {
    display: block;
    font-size: small;
  }

  .unlocked-text {
    font-size: smaller;
    font-weight: 600;
  }
</style>
