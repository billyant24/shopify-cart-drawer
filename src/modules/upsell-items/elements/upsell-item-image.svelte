<script lang="ts">
  import {
    addedItemToCartStatus,
    itemsInCart,
    itemsUpsell,
    recommendedProducts,
  } from "../../../stores"
  import * as ShopifyThemeCurrency from "@shopify/theme-currency"
  import UpsellItemPrices from "./upsell-item-prices.svelte"
  import ModalSlideUp from "../../../utils-components/modal-slide-up.svelte"
  import recommendProducts from "../../../fake-data"

  export let imgUrl: string
  export let imgAlt: string = "product-alt"
  export let itemId: string

  recommendedProducts.set(recommendProducts)

  let product: any = null

  let showModal = false

  const handleAddUpsellItemToCart = () => {
    showModal = false

    const thisItem = $itemsUpsell.find((item) => item.itemId === itemId)
    itemsInCart.set([thisItem, ...$itemsInCart])
    addedItemToCartStatus.set(true)

    const addUpsellItemToCartMessage = JSON.stringify({
      message: "add-upsell-item-to-cart",
      id: itemId,
    })

    window.parent.postMessage(addUpsellItemToCartMessage, "*")

    const upsellItemsLeft = $itemsUpsell.filter((item) => item !== thisItem)
    itemsUpsell.set(upsellItemsLeft)
  }

  function selectProduct() {
    showModal = true
    product = $recommendedProducts.find((product) => product.itemId === itemId)
    console.log(product)
  }

  let quantity: number = 1
</script>

<div class="upsell-item-image-container" item-id={itemId}>
  <img src={imgUrl} alt={imgAlt} width="100%" height="100%" loading="lazy" />
  <div class="middle-overlay">
    <button class="select-btn" on:click={selectProduct}> Select </button>
  </div>
</div>

{#if showModal}
  <ModalSlideUp on:close={() => (showModal = false)}>
    {#if product}
      <div class="product-container">
        <div class="product-image-wrapper">
          <img
            class="product-img"
            src={product.featured_image || product.imgUrl}
            loading="lazy"
            alt={product.title}
          />
        </div>
        <div class="product-content-wrapper">
          <div class="product-title">{product.title || product.itemTitle}</div>
          <UpsellItemPrices
            originPrice={product.price || product.originPrice}
            discountedPrice={product.compare_at_price ||
              product.discountedPrice}
          />

          <p>{@html product.description || ""}</p>
          <a
            class="learn-more-link"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo"
            >Learn More</a
          >
        </div>
        <div class="add-to-cart-and-quantity">
          <input
            class="item-quality-input"
            type="number"
            bind:value={quantity}
            min="1"
          />
          <button
            class="add-upsell-item-to-cart-btn"
            on:click={handleAddUpsellItemToCart}
            item-id={itemId}
            >Add To Cart - {ShopifyThemeCurrency.formatMoney(
              quantity * product.price || product.originPrice
            )}
          </button>
        </div>
      </div>
    {/if}
  </ModalSlideUp>
{/if}

<style lang="scss">
  .upsell-item-image-container {
    width: 8rem;
    height: 8rem;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .upsell-item-image-container:hover img {
    opacity: 0.3;
  }

  .upsell-item-image-container:hover .middle-overlay {
    opacity: 1;
  }

  img {
    opacity: 1;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }

  .middle-overlay {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .select-btn {
    background-color: black;
    border: none;
    cursor: pointer;
    font-size: smaller;
    padding: 4px 12px;
    font-weight: 600;
    color: white;
    margin-top: 8px;
  }

  button:hover {
    color: white;
    background-color: rgba($color: #000000, $alpha: 0.8);
  }

  .product-container {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem 1.5rem 2rem;
  }

  .product-content-wrapper {
    padding: 0rem;
    overflow: auto;
  }

  .product-title {
    font-size: medium;
    font-weight: 600;
    margin-bottom: 0.375rem;
  }

  .product-img {
    outline: 1px solid rgba($color: #000000, $alpha: 0.1);
  }

  p {
    font-size: x-small;
    margin-top: 1rem;
  }

  .add-upsell-item-to-cart-btn {
    display: block;
    background-color: black;
    border: none;
    cursor: pointer;
    font-size: smaller;
    padding: 14px;
    font-weight: 600;
    color: white;
    width: calc(100% - 4rem);
  }

  .add-upsell-item-to-cart-btn:hover {
    color: white;
    background-color: rgba($color: #000000, $alpha: 0.8);
  }

  .item-quality-input {
    margin: 0;
    width: 4rem;
  }

  .add-to-cart-and-quantity {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 1rem 0;
  }

  .learn-more-link {
    text-decoration: underline;
    font-size: 0.7rem;
  }
</style>
