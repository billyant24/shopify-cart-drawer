<script lang="ts">
  import {
    countrySelect,
    provinceSelect,
    shippingRates,
    shipZipCode,
  } from "../../../stores"
  import ModalSlideUp from "../../../utils-components/modal-slide-up.svelte"
  import AddressSelector from "./address-selector.svelte"

  let addressDisplay = `Address`

  $: {
    if (
      $shipZipCode !== "" &&
      $provinceSelect !== "" &&
      $countrySelect !== ""
    ) {
      addressDisplay = `${$countrySelect}, ${$provinceSelect}, ${$shipZipCode}`
    } else if ($shipZipCode !== "" && $countrySelect !== "") {
      addressDisplay = `${$countrySelect}, ${$shipZipCode}`
    } else if ($provinceSelect !== "" && $countrySelect !== "") {
      addressDisplay = `${$countrySelect}, ${$provinceSelect}`
    } else if ($countrySelect !== "") {
      addressDisplay = `${$countrySelect}`
    } else {
      addressDisplay = `Address`
    }
  }

  let showModal = false

  $: {
    if ($shippingRates?.length) {
      showModal = false
    }
  }
</script>

<div class="wrapper">
  <div class="label">
    <div>
      <span>🚚</span>
      <span style="font-weight: 600;">Estimate shipping rate</span>
    </div>
  </div>
  <ul>
    {#if $shippingRates?.length}
      {#each $shippingRates as shippingRate}
        <li>{shippingRate.presentment_name} - ${shippingRate.price}</li>
      {/each}
    {:else}
      <li>No shipping rates found</li>
    {/if}
  </ul>

  <div class="label">
    <div>🌏 {addressDisplay}</div>
  </div>
  <div class="edit-btn" on:click={() => (showModal = true)}>Edit address</div>
</div>

{#if showModal}
  <ModalSlideUp
    on:close={() => (showModal = false)}
    headerTitle="Select address"
  >
    <AddressSelector />
  </ModalSlideUp>
{/if}

<style lang="scss">
  .wrapper {
    background-color: white;
  }

  .edit-btn {
    cursor: pointer;
    font-size: small;
    font-weight: 500;
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.6);
    margin: 1rem 0 0.5rem 0;
  }

  .label {
    font-size: small;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }

  ul {
    font-size: small;
    padding: 0;
    padding-left: 1rem;
    list-style-position: inside;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  li {
    padding: 0.375rem 0;
  }
</style>
