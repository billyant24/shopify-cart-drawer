<script lang="ts">
  import { orderNote } from "../../stores"
</script>

<div>
  <textarea
    class="message-input"
    placeholder="Enter your message"
    bind:value={$orderNote}
  />
</div>

<style lang="scss">
  .message-input {
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 0;
    font-size: small;
    width: 100%;
    resize: vertical;
    min-height: 10vh;
  }

  textarea:focus {
    border: 1px solid rgba(133, 133, 133, 0.2);
    // outline: 1px solid black;
  }
</style>
