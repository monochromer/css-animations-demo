export function formatTime(totalSeconds) {
  const min = Math.floor(totalSeconds / 60)
  const sec = totalSeconds - (min * 60)
  return `${min}:${sec}`
}