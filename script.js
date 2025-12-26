function changeStream(channelId) {
  const iframe = document.querySelector(".player iframe");
  iframe.src = `https://www.youtube.com/embed/live_stream?channel=${channelId}`;
}
