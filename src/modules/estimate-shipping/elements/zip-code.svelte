<script>
  import { shipZipCode } from "../../../stores"

  import Label from "./label.svelte"
</script>

<Label label="Zip code" />
<input
  type="text"
  name="zip"
  id="shipping-estimator-zip"
  placeholder="Enter zip code"
  required={true}
  bind:value={$shipZipCode}
/>

<style lang="scss">
  #shipping-estimator-zip {
    width: 100%;
    margin-bottom: 2rem;
    padding: 10px;
  }
</style>
