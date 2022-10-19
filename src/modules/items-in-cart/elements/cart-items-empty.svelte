<script>
</script>

<div class="cart-item-empty-container">
  <div class="cart-item-empty-wrapper">
    <div style="font-size: 4rem;">
      <!-- <svg
				xmlns="http://www.w3.org/2000/svg"
				height="3rem"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg> -->
      🛒
    </div>

    <div class="empty-text">Your cart is empty.</div>
  </div>
</div>

<style lang="scss">
  /* your styles go here */

  .cart-item-empty-container {
    display: grid;
    height: 100%;
    place-items: center;
  }

  .cart-item-empty-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .empty-text {
    font-size: medium;
    color: rgba($color: #000000, $alpha: 0.7);
    padding: 1rem 0 2rem 0;
  }

  // .shop-now-btn {
  // 	cursor: pointer;
  // 	border: 1px solid black;
  // 	align-items: center;
  // 	color: white;
  // 	background-color: black;
  // 	font-size: medium;
  // 	padding: 10px 20px;
  // }

  // .shop-now-btn:hover {
  // 	background-color: rgba($color: #000000, $alpha: 0.8);
  // }
</style>
