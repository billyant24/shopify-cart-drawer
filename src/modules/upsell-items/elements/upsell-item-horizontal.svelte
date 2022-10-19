<!-- <script lang="ts">
	import * as ShopifyThemeCurrency from '@shopify/theme-currency';

	import UpsellItemContent from './upsell-item-content.svelte';
	import UpsellItemImage from './upsell-item-image.svelte';
	export let imgUrl: string;
	export let imgAlt: string;
	export let originPrice: string;
	export let compareAtPrice: string;
	export let itemTitle: string;
	export let variantTitle: string;
	export let itemId: string;
</script>

<div class="upsell-item">
	<UpsellItemImage {imgUrl} {imgAlt} />
	<UpsellItemContent
		originPrice={ShopifyThemeCurrency.formatMoney(originPrice, null)}
		compareAtPrice={ShopifyThemeCurrency.formatMoney(compareAtPrice, null)}
		{itemTitle}
		{variantTitle}
		thisItemId={itemId}
	/>
</div>

<style lang="scss">
	.upsell-item {
		// display
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 5px;

		// box
		margin: 1rem 0;

		// colors
		background-color: white;
		border: 1px solid rgb(133, 133, 133, 0.3);
		box-shadow: rgb(0 0 0 / 12%) 0px 0px 0.375rem 0px;
	}
</style> -->
