<script lang="ts">
  import {
    addedItemToCartStatus,
    cartCurrency,
    itemsInCart,
    itemsUpsell,
    recommendedProducts,
    shippingRates,
    shopOriginUrl,
  } from "./stores"
  import type { ICartItem } from "./types/cart-item.interface"
  import arrayUnique from "./utils-functions/array-unique"

  function renderCart(shopifyCart: any) {
    const cartItems: ICartItem[] = shopifyCart.items.map((item) => {
      const newItem: ICartItem = {
        itemId: item.id,
        itemTitle: item.product_title,
        variantTitle: item.variant_title,
        originPrice: item.original_price,
        discountedPrice: item.discounted_price,
        imgUrl: item.featured_image.url,
        imgAlt: item.featured_image.alt,
        quantity: item.quantity,
        productUrl: item.url,
      }
      return newItem
    })
    if ($itemsInCart.length === 0) {
      itemsInCart.set(cartItems)
    } else {
      const mergeArr = [...cartItems, ...$itemsInCart]
      const filterDuplicatedItem = arrayUnique(mergeArr)
      itemsInCart.set(filterDuplicatedItem)
    }
  }

  function renderProductRecommendations(productRecommendations: any) {
    const upsellItems = productRecommendations.map((item) => {
      const upsellItem = {
        itemId: item.id,
        itemTitle: item.title,
        variantTitle: item.title,
        originPrice: item.price,
        discountedPrice: item.compare_at_price,
        imgUrl: item.featured_image,
        imgAlt: item.handle,
        quantity: 1,
        productUrl: item.url,
      }
      return upsellItem
    })

    if ($recommendedProducts.length === 0) {
      recommendedProducts.set(productRecommendations)
    }

    if ($itemsUpsell.length === 0) {
      itemsUpsell.set(upsellItems)
    } else {
      const mergeArr = [...upsellItems, ...$itemsUpsell]
      const filterDuplicatedItem = arrayUnique(mergeArr)
      itemsUpsell.set(filterDuplicatedItem)
    }
  }

  window.addEventListener("message", (e) => {
    const messageJSON = JSON.parse(e.data)

    if (messageJSON.type === "click_on_icon") {
      renderCart(messageJSON.cartData)
    }

    if (messageJSON.type === "get_cart_on_load") {
      renderCart(messageJSON.cartData)
      cartCurrency.set(messageJSON.cartData.currency)
      shopOriginUrl.set(messageJSON.shopOrigin)
    }

    if (messageJSON.type === "new_product_added") {
      renderCart(messageJSON.cartData)
      renderProductRecommendations(messageJSON.recommendationProducts)
      console.log(messageJSON.recommendationProducts)
      addedItemToCartStatus.set(true)
    }

    if (messageJSON.type === "est-shipping-rate") {
      shippingRates.set(messageJSON.data.shipping_rates)
    }
  })
</script>
