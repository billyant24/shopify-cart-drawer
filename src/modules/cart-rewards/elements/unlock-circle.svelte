<script lang="ts">
  export let name: string = "reward"
</script>

<div class="circle-container">
  <div class="circle unlock-circle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="5"
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
  <div class="reward-name">{name}</div>
</div>

<style lang="scss">
  .circle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .unlock-circle {
    background-color: #047857;
  }

  .circle {
    height: 10px;
    width: 10px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    color: #047857;
  }

  .reward-name {
    font-size: x-small;
    color: #047857;
    font-weight: 600;
  }
</style>
