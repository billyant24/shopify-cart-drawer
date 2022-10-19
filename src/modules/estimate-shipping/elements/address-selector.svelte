<script>
  import CountryList from "./country-list.svelte"
  import EstimateShippingButton from "./estimate-shipping-button.svelte"
  import ProvinceList from "./province-list.svelte"
  import ZipCode from "./zip-code.svelte"
</script>

<div class="select-address-container">
  <div class="form__input-wrapper">
    <CountryList />
  </div>

  <div class="province-wrapper" style="display: block;">
    <ProvinceList />

    <div class="select-wrapper select-wrapper--primary is-filled" />
  </div>

  <div class="zip-code-wrapper">
    <ZipCode />
  </div>

  <div class="buttons-wrapper">
    <div>
      <EstimateShippingButton />
    </div>
    <!-- <div>
			<button
				class="cancel-button"
				on:click={() => {
					setModalOpen.set(false);
				}}>Cancel</button
			>
		</div> -->
  </div>
</div>

<style lang="scss">
  .select-address-container {
    padding: 1.5rem 2rem 1.5rem 2rem;
  }

  .province-wrapper {
    display: block;
  }

  .zip-code-wrapper {
    display: block;
  }

  .buttons-wrapper {
    display: flex;
    gap: 5px;
  }

  // .cancel-button {
  // 	width: 84px;
  // 	background-color: transparent;
  // 	height: 100%;
  // 	border: none;
  // 	cursor: pointer;
  // 	font-weight: 600;
  // 	font-size: small;
  // 	height: 36px;
  // 	color: #333;
  // }

  // .cancel-button:hover {
  // 	background-color: rgba(113, 113, 113, 0.11);
  // 	transition-delay: 200ms;
  // }
</style>
