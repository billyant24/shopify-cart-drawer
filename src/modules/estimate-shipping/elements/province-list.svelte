<script lang="ts">
  import { provinceList, provinceSelect, shipZipCode } from "../../../stores"

  import Label from "./label.svelte"

  let provincesJSON = []

  $: {
    if ($provinceList.length) {
      provincesJSON = JSON.parse($provinceList)
    }
  }
</script>

{#if provincesJSON.length > 0}
  <Label label="Province" />
  <input
    list="shipping-estimator-province"
    id="province-input"
    name="province-input"
    placeholder="Enter province/state"
    bind:value={$provinceSelect}
    on:input={() => shipZipCode.set("")}
  />
  <datalist id="shipping-estimator-province">
    {#each provincesJSON as province}
      <option value={province[0]}>{province[1]}</option>
    {/each}
  </datalist>
{/if}

<style lang="scss">
  input {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    padding: 10px;
  }
</style>
