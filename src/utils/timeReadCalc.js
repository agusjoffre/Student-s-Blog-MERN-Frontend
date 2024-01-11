export default function calculateReadTime(text) {
  const wordsPerMinute = 300;
  const totalWords = text.trim().split(/\s+/).length;
  const timeReadInMinutes = totalWords / wordsPerMinute;

  return Math.ceil(timeReadInMinutes);
}
