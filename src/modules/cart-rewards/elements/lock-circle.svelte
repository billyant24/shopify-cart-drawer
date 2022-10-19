<script lang="ts">
  export let name: string = "reward"
</script>

<div class="circle-container">
  <div class="circle lock-circle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
        clip-rule="evenodd"
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

  .lock-circle {
    background: #ddd;
    color: #747474;
  }

  .reward-name {
    font-size: x-small;
    color: #4e4e4e;
    font-weight: 600;
  }

  .circle {
    height: 10px;
    width: 10px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
  }
</style>
