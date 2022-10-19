<script lang="ts">
  export let quantity: number = 1

  const onChange = () => {
    console.log(quantity)
  }
</script>

<input
  class="item-quality-input"
  type="number"
  bind:value={quantity}
  min="1"
  on:change={onChange}
/>

<style lang="scss">
  .item-quality-input {
    max-width: 50px;
    text-align: center;
    font-size: small;
  }
</style>
