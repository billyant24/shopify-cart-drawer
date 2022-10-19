<script lang="ts">
  import { theRewards } from "../../stores"
  import ModalSlideUp from "../../utils-components/modal-slide-up.svelte"
  import CurrentRewardItem from "./elements/current-reward-item.svelte"
  import RewardItem from "./elements/reward-item.svelte"

  $: largestItem = $theRewards.reduce((prev, curr) =>
    prev.targetValue > curr.targetValue ? prev : curr
  )

  let showModal = false
</script>

<div class="reward-container">
  <CurrentRewardItem />

  <div class="offer-details" on:click={() => (showModal = true)}>
    Buy more, save more
  </div>
</div>

{#if showModal}
  <ModalSlideUp
    on:close={() => (showModal = false)}
    headerTitle="Buy more, Save more"
  >
    <div class="reward-list">
      {#each $theRewards as reward, index}
        {#if index === 0}
          <div class="reward-item">
            <RewardItem
              targetValue={reward.targetValue}
              rewardName={reward.name}
              itemIdex={index}
            />
          </div>
        {:else}
          <div style="border: 0.5px solid #d3d3d3;" />
          <div class="reward-item">
            <RewardItem
              targetValue={reward.targetValue}
              rewardName={reward.name}
              itemIdex={index}
            />
          </div>
        {/if}
      {/each}
    </div>
  </ModalSlideUp>
{/if}

<style lang="scss">
  .reward-container {
    background-color: white;
    padding: 2rem 1.5rem 2rem 1.5rem;
  }

  .offer-details {
    cursor: pointer;
    font-size: small;
    font-weight: 500;
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 2rem;
  }

  .reward-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .reward-item {
    padding-left: 2rem;
    padding-right: 2rem;
  }
</style>
