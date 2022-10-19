export const closeFrame = () => {
  const message = JSON.stringify({
    message: "close-iframe",
  })
  window.parent.postMessage(message, "*")
}
