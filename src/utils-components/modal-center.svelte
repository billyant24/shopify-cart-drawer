<script lang="ts">
  import { createEventDispatcher, onDestroy } from "svelte"
  import { fly, fade } from "svelte/transition"
  import XIcon from "./icons/x-icon.svelte"

  const dispatch = createEventDispatcher()
  const close = () => dispatch("close")

  let modal

  const handle_keydown = (e) => {
    if (e.key === "Escape") {
      close()
      return
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes = modal.querySelectorAll("*") as HTMLElement[]
      const tabbable = Array.from(nodes).filter(
        (n) => n.tabIndex >= 0
      ) as HTMLElement[]

      let index = tabbable.indexOf(document.activeElement as HTMLElement)
      if (index === -1 && e.shiftKey) index = 0

      index += tabbable.length + (e.shiftKey ? -1 : 1)
      index %= tabbable.length

      tabbable[index].focus()
      e.preventDefault()
    }
  }

  const previously_focused =
    typeof document !== "undefined" && (document.activeElement as HTMLElement)

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus()
    })
  }
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={close} />

<div
  class="modal"
  role="dialog"
  aria-modal="true"
  bind:this={modal}
  in:fade={{ duration: 300 }}
  out:fade={{ duration: 200 }}
>
  <div class="modal-header">
    <div />
    <div class="close-modal-x" on:click={close}>
      <XIcon height="20px" />
    </div>
  </div>
  <div class="modal-content">
    <slot />
  </div>
</div>

<style lang="scss">
  .modal-background {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 67860;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }

  .modal-content {
    background: white;
    overflow: auto;
  }

  .close-modal-x {
    cursor: pointer;
    display: grid;
    place-items: center;
    justify-items: end;
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
    background-color: rgba($color: #fff, $alpha: 0.9);
  }
</style>
