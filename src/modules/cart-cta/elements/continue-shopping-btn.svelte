<script lang="ts">
  const handleClick = () => {
    const message = JSON.stringify({
      message: "close-iframe",
    })
    window.parent.postMessage(message, "*")
  }
</script>

<button class="continue-shopping-btn" on:click={handleClick}>
  Continue shopping
</button>

<style lang="scss">
  .continue-shopping-btn {
    width: 100%;
    background-color: black;
    font-weight: 600;
    color: white;
    border: 1px solid;
    cursor: pointer;
    font-size: medium;
    margin: 1rem 0 1rem 0;
    height: 50px;
  }

  .continue-shopping-btn:hover {
    background-color: rgba($color: #000000, $alpha: 0.8);
  }
</style>
