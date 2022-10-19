<div class="dot-flashing" />

<style lang="scss">
  /**
 * ==============================================
 * Dot Flashing
 * ==============================================
 */
  .dot-flashing {
    position: relative;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background-color: #555;
    color: #555;
    animation: dotFlashing 1s infinite linear alternate;
    animation-delay: 0.5s;
  }

  .dot-flashing::before,
  .dot-flashing::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  .dot-flashing::before {
    left: -10px;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background-color: #555;
    color: #555;
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 0s;
  }

  .dot-flashing::after {
    left: 10px;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background-color: #555;
    color: #555;
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 1s;
  }

  @keyframes dotFlashing {
    0% {
      background-color: #555;
    }
    50%,
    100% {
      background-color: #dbdbdb;
    }
  }
</style>
