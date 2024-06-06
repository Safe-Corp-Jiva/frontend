// Helper functions

export const formatDateFromString = (date: string) => {
  const d = new Date(date)
  return d.toLocaleString()
}

// This function doesn't work, so don't use it unless you fix it
export const calculateDuration = (start: string, end: string) => {
  // Step 1: Parse the two timestamp strings into Date objects
  const startDate = new Date(start)
  const endDate = new Date(end)

  // Step 2: Calculate the difference in milliseconds between the two dates
  const diffMs = endDate.getTime() - startDate.getTime()

  // Step 3: Convert the difference from milliseconds to hours and minutes
  const diffMinutes = Math.floor(diffMs / 60000) // 1 minute = 60,000 milliseconds
  const hours = Math.floor(diffMinutes / 60)
  const minutes = diffMinutes % 60

  // Step 4: Format the result to display hours (if applicable) and minutes
  let result = ''
  if (hours > 0) {
    result += `${hours} hour${hours > 1 ? 's' : ''}`
  }
  if (minutes > 0) {
    if (result.length > 0) {
      result += ' and '
    }
    result += `${minutes} minute${minutes > 1 ? 's' : ''}`
  }
}
