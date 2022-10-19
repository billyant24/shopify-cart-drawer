<script lang="ts">
  import { shopOriginUrl } from "../../../stores"

  export let itemTitle: string
  export let productUrl: string = "/"

  $: itemHref = $shopOriginUrl + productUrl

  $: itemTitleDisplay =
    itemTitle.length < 18 ? itemTitle : `${itemTitle.slice(0, 18)}...`
</script>

<div class="item-title">
  <a href={itemHref} target="_blank" title={itemTitle}>{itemTitleDisplay}</a>
</div>

<style lang="scss">
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  .item-title {
    font-size: x-small;
    cursor: pointer;
    font-weight: 600;
  }

  .item-title:hover {
    // border-bottom: 1px solid gray;
    cursor: pointer;
    color: rgba($color: #000000, $alpha: 0.6);
  }
</style>
