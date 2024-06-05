// Helper functions

export const formatDateFromString = (date: string) => {
  const d = new Date(date)
  return d.toLocaleString()
}
