<script lang="ts">
  export let value: number = 0

  $: {
    if (value > 100) value = 100
    if (value < 0) value = 0
  }
</script>

<div class="progress-bar-container">
  <span class="progress-bar" style="width: {value}%;" />
</div>

<style lang="scss">
  .progress-bar-container {
    background-color: #e6e6e6;
    border-radius: 20px;
    height: 5px;
    position: relative;
  }

  .progress-bar-container > .progress-bar {
    display: block;
    height: 100%;
    border-radius: 20px;
    background-color: #047857;
    transition: width 0.2s ease-in-out 0s;
    position: relative;
    overflow: hidden;
  }
</style>
