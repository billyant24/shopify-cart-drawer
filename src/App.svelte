<script lang="ts">
  import DesktopScreen from "./z-screen/desktop-screen.svelte"
  import MobileScreen from "./z-screen/mobile-screen.svelte"
</script>

<section>
  <div id="desktop-slick-cart">
    <DesktopScreen />
  </div>
  <div id="mobile-slick-cart">
    <MobileScreen />
  </div>
</section>

<style lang="scss">
  #desktop-slick-cart {
    display: block;
  }

  #mobile-slick-cart {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    #desktop-slick-cart {
      display: none;
    }

    #mobile-slick-cart {
      display: block;
    }
  }
</style>
