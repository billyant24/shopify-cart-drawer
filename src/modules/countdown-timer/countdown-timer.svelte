<script lang="ts">
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"

  export let isDisplay: boolean = true
  export let minutesCountDown: number = 10

  let countdown: number = minutesCountDown * 60
  let timer: any

  let minutes: number
  let minutesDisplay: string

  let seconds: number
  let secondsDisplay: string

  let countDownDisplay: string

  function updateCountDownDisplay() {
    minutes = Math.floor(countdown / 60)
    minutesDisplay = `${minutes}`

    seconds = countdown % 60
    secondsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`

    countdown -= 1
  }

  onMount(() => {
    countDownDisplay = `?`
    if (isDisplay === true) {
      timer = setInterval(updateCountDownDisplay, 1000)
    }
  })

  $: {
    countDownDisplay = `${minutesDisplay}m ${secondsDisplay}s`

    if (minutes < 1) {
      countDownDisplay = `${secondsDisplay}s`
    }
  }

  $: {
    if (countdown === 0) {
      if (timer) {
        clearInterval(timer)
        timer = null
        setTimeout(() => {
          countDownDisplay = "0s"
        }, 1000)
      }
    }
  }
</script>

{#if isDisplay}
  <div class="countdown-timer-container" transition:fade>
    <span class="countdown-timer-text"
      >Checkout within the next <strong class="count-down-timer"
        >{countDownDisplay}</strong
      > minutes to avoid current items in cart sold out or special offers expired.</span
    >
  </div>
{/if}

<style>
  .countdown-timer-container {
    /* display: grid;
      place-items: center; */
    padding: 0.65rem 4rem;
    background-color: #fdf6e4;
    /* background-color: #f5f5f5; */

    /* border */
    /* border: 1px dashed #f7b100; */
    /* border: 1px solid #f7b100; */

    /* text */
    line-height: 20px;
    /* font-size: smaller; */
    font-size: 0.68rem;
    text-align: center;
  }

  .count-down-timer {
    color: rgb(226, 99, 99);
  }
</style>
