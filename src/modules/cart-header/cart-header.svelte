<script>
  import CloseWindow from "./elements/close-window.svelte"
</script>

<div class="header-container">
  <div class="your-cart">Your Cart</div>
  <CloseWindow />
</div>

<style>
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .your-cart {
    font-weight: 600;
    font-size: large;
  }
</style>
