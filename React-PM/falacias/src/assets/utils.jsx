export const getRandomElementFromArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return undefined
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}