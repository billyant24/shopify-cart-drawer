<script lang="ts">
  import { itemsInCart } from "../../stores"
  import DotsLoader from "../../utils-components/dots-loader.svelte"
  import TagIcon from "../../utils-components/icons/tag-icon.svelte"
  import XIcon from "../../utils-components/icons/x-icon.svelte"

  let coupon: string = ""

  let checkingCoupon = false

  const removeCode = () => {
    alert("removing code")
  }

  function onCheckingCoupon() {
    const applyCodeBtn: HTMLButtonElement =
      document.querySelector(".apply-code-btn")
    applyCodeBtn.disabled = true
    checkingCoupon = true

    console.log($itemsInCart)

    const addCouponMessage = JSON.stringify({
      message: "checking-discount",
      discountCode: coupon,
    })

    window.parent.postMessage(addCouponMessage, "*")
    setTimeout(() => {
      checkingCoupon = false
      applyCodeBtn.disabled = false
    }, 5000)
  }
</script>

<div class="discount-code-wrapper">
  <div class="discount-code-title">
    <span>🏷️</span>
    <span style="font-weight: 600;">Discount code</span>
  </div>
  <div class="wrapper">
    <div class="apply-coupon">
      <div>
        <input
          class="coupon-input"
          placeholder="Enter code"
          type="text"
          bind:value={coupon}
        />
      </div>
      <div>
        <button class="apply-code-btn" on:click={onCheckingCoupon}>
          {#if checkingCoupon}
            <div class="btn-content-container">
              <DotsLoader />
            </div>
          {:else}
            <div class="btn-content-container">Apply</div>
          {/if}
        </button>
      </div>
    </div>
    <!-- <div class="invalid-promo-code-message">Invalid code</div> -->
    <div class="applied-promo-code-message">
      <div class="icon-wrapper"><TagIcon height="13px" /></div>
      <div class="promo-code-text">HAPPY</div>
      <div
        class="icon-wrapper remove-code"
        style="cursor: pointer;"
        on:click={removeCode}
      >
        <XIcon height="16px" />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .discount-code-wrapper {
    background-color: white;
    padding: 2rem 1.5rem 2rem 1.5rem;
  }

  .discount-code-title {
    font-size: small;
    margin-bottom: 1rem;
  }

  .wrapper {
    font-size: medium;
  }
  .coupon-input {
    padding: 10px;
    margin: 0;
    font-size: small;
    width: 100%;
  }

  .apply-coupon {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
  }

  .apply-code-btn {
    width: 84px;
    -webkit-box-pack: center;
    background: black;
    color: white;
    border-radius: 3px;
    height: 100%;
    border: 1px solid black;
    cursor: pointer;
    font-weight: 600;
    font-size: small;
  }

  .apply-code-btn:hover {
    background-color: rgba($color: #000000, $alpha: 0.8);
  }

  .applied-promo-code-message {
    font-size: small;
    border: none;
    background-color: rgba(133, 133, 133, 0.3);
    display: inline-grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    gap: 8px;
    padding: 0.5rem;
    border-radius: 3px;
    margin: 1.5rem 0 0.5rem 0;
  }

  .promo-code-text {
    font-weight: 600;
  }

  .icon-wrapper {
    display: grid;
    place-items: center;
  }

  .btn-content-container {
    display: grid;
    place-items: center;
  }
</style>
