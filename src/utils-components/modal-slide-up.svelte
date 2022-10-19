<script lang="ts">
  import { createEventDispatcher, onDestroy } from "svelte"
  import { fly } from "svelte/transition"
  import XIcon from "./icons/x-icon.svelte"

  export let headerTitle: string = ""

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
  in:fly={{ y: 200, duration: 200 }}
  out:fly={{ y: 200, duration: 200 }}
>
  <div class="modal-header" on:click={close}>
    <div class="header-title">{headerTitle}</div>

    <div class="close-modal-x">
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
    right: 0;
    width: 50%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 67860;
  }

  .modal {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 31%;
    max-height: 100%;
    max-width: 100%;
    background: transparent;
    display: grid;
    grid-template-rows: auto 1fr;
    z-index: 67867;
  }

  @media only screen and (max-width: 768px) {
    .modal {
      width: 100%;
      max-height: 90%;
    }

    .modal-background {
      width: 100%;
    }
  }

  .modal-content {
    background: white;
    overflow: auto;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #f3f3f3;
    border-radius: 5px 5px 0px 0px;
  }

  .header-title {
    font-size: medium;
    font-weight: 600;
  }

  .close-modal-x {
    display: grid;
    place-items: center;
    justify-items: start;
    color: grey;
    cursor: pointer;
  }
</style>
