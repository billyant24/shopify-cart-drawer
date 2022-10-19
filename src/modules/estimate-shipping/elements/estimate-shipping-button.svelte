<script lang="ts">
  import {
    countrySelect,
    provinceSelect,
    setModalOpen,
    shippingRates,
    shipZipCode,
  } from "../../../stores"
  import DotsLoader from "../../../utils-components/dots-loader.svelte"

  let isEstimatingShipping: boolean = false

  function onEstimatingShippingCost() {
    const button: HTMLButtonElement = document.querySelector(
      ".estimator-shipping-btn"
    )
    button.disabled = true
    isEstimatingShipping = true

    const shippingPayload = {
      zip: $shipZipCode,
      country: $countrySelect,
      province: $provinceSelect,
    }

    console.log(shippingPayload)

    const estShippingRateMessage = JSON.stringify({
      message: "est-shipping",
      shippingPayload,
    })

    window.parent.postMessage(estShippingRateMessage, "*")

    setTimeout(() => {
      isEstimatingShipping = false
      button.disabled = false
    }, 1000)
  }

  $: {
    if ($shippingRates.length) {
      console.log($shippingRates)
      setModalOpen.set(false)
    }
  }
</script>

<button
  type="button"
  class="estimator-shipping-btn"
  data-action="estimate-shipping"
  on:click={onEstimatingShippingCost}
>
  {#if isEstimatingShipping}
    <div class="btn-content-container">
      <DotsLoader />
    </div>
  {:else}
    <div class="btn-content-container">Estimate</div>
  {/if}
</button>

<style lang="scss">
  .estimator-shipping-btn {
    width: 84px;
    background: black;
    color: white;
    height: 100%;
    border: 1px solid black;
    cursor: pointer;
    font-weight: 600;
    font-size: small;
    height: 36px;
  }

  .estimator-shipping-btn:hover {
    background-color: rgba($color: #000000, $alpha: 0.8);
  }

  .btn-content-container {
    display: grid;
    place-items: center;
  }
</style>
