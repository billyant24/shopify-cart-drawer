<script>
  import XIcon from "../../../utils-components/icons/x-icon.svelte"
  import { closeFrame } from "../../../utils-functions/close-frame"
</script>

<a href="#close" class="back-to-shopping-btn" on:click={closeFrame}>
  <XIcon height="50%" />
</a>

<style lang="scss">
  .back-to-shopping-btn {
    display: grid;
    place-items: center;
    justify-items: end;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    color: #888888;
  }
</style>
