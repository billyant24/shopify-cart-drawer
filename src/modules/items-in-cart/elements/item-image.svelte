<script lang="ts">
  export let imgUrl: string
  export let imgAlt: string = "product-alt"
</script>

<div class="item-image-wrapper">
  <img src={imgUrl} alt={imgAlt} width="100%" height="100%" loading="lazy" />
</div>

<style lang="scss">
  .item-image-wrapper {
    display: grid;
    place-items: center;
    width: 6rem;
    height: 6rem;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
