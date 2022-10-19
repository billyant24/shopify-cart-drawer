import { writable } from "svelte/store"
import { myRewards } from "./fake-data"

export const subTotalCartValue = writable(0)

export const lastestAmountChanges = writable(0)

export const shippingCost = writable(0)

export const totalCartValue = writable(0)

export const addedItemToCartStatus = writable(false)

export const itemsInCart = writable([])

export const itemsUpsell = writable([])

export const recommendedProducts = writable([])

export const latestItemAddedToCart = writable({})

export const cartLength = writable(0)

export const cartCurrency = writable("USD")

export const loadingToCheckout = writable(false)

export const shopOriginUrl = writable(`https://www.google.com`)

export const countrySelect = writable("")

export const provinceList = writable("")

export const provinceSelect = writable("")

export const shipZipCode = writable("")

export const setModalOpen = writable<boolean>(false)

export const shippingRates = writable([])

export const currentAwayValue = writable(myRewards[0].targetValue)

export const theRewards = writable(myRewards)

export const currentRewardIndex = writable(0)

export const currentRewardItem = writable(myRewards[0])

export const currentProgressValue = writable(0)

export const orderNote = writable("--")
