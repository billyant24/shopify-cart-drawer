<script lang="ts">
  export let thisItemId: string
</script>

<button class="add-upsell-item-to-cart-btn" item-id={thisItemId}>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 20 20" fill="currentColor">
		<path
			fill-rule="evenodd"
			d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
			clip-rule="evenodd"
		/>
	</svg> -->

  <div>SELECT</div>
</button>

<style lang="scss">
  .add-upsell-item-to-cart-btn {
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    font-size: small;
    width: 100%;
    padding: 8px 16px;
    font-weight: 500;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .add-upsell-item-to-cart-btn:hover {
    color: white;
    background-color: rgba($color: #000000, $alpha: 0.8);
  }
</style>
