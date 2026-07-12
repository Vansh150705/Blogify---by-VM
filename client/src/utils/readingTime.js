// Estimate reading time (in minutes) from an HTML or plain-text string.
// Strips HTML tags, counts words, and assumes ~200 words per minute.
export const getReadingTime = (html = '') => {
  const text = html.replace(/<[^>]*>/g, ' ')
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}
