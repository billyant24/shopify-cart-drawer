<script lang="ts">
  import { orderNote } from "../../stores"
  import ModalSlideUp from "../../utils-components/modal-slide-up.svelte"
  import OrderNoteInput from "./order-note-input.svelte"

  let showModal = false
</script>

<div class="order-note-wrapper">
  <div class="order-note-title">
    <span>🗒️</span>
    <span style="font-weight: 600;">Order note</span>
  </div>
  <div class="order-note-text">{$orderNote}</div>
  <div class="edit-btn" on:click={() => (showModal = true)}>Edit message</div>
</div>

{#if showModal}
  <ModalSlideUp on:close={() => (showModal = false)} headerTitle="Update note">
    <div class="update-note-wrapper">
      <OrderNoteInput />
      <button class="update-button" on:click={() => (showModal = false)}
        >Update Note</button
      >
    </div>
  </ModalSlideUp>
{/if}

<style lang="scss">
  .order-note-wrapper {
    background-color: white;
    padding: 2rem 1.5rem 2rem 1.5rem;
  }

  .update-note-wrapper {
    padding: 1.5rem 2rem 1.5rem 2rem;
  }

  .order-note-title {
    font-size: small;
    margin-bottom: 1rem;
  }

  .order-note-text {
    margin: 1rem 0 1rem 0;
    font-size: small;
  }

  .update-button {
    background: black;
    color: white;
    border: 1px solid black;
    cursor: pointer;
    font-weight: 600;
    font-size: small;
    padding: 10px 15px;
    margin-top: 1rem;
  }

  .update-button:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .edit-btn {
    cursor: pointer;
    font-size: small;
    font-weight: 500;
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.6);
  }
</style>
