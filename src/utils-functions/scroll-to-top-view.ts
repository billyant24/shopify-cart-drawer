export function scrollToTopView(): void {
  // const cartHeader = document.querySelector('.cart-header');

  // setTimeout(() => {
  // 	cartHeader.scrollIntoView({ behavior: 'smooth' });
  // }, 500);
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
