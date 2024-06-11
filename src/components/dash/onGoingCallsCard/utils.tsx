export function getResultStatus(result: string) {
  switch (result) {
    case 'Satisfied':
      return 'bg-green-400/70 text-green-600 border border-green-600 border-2 font-light'
    case 'Unsatisfied':
      return 'bg-red-400/70 text-red-600 border border-red-600 border-2 font-light'
    case 'Neutral':
      return 'bg-yellow-200 text-yellow-600 border border-yellow-500 border-2 font-light'
    case 'Unknown':
      return 'bg-gray-400/70 text-gray-600 border border-gray-600 border-2 font-light'
    default:
      return ''
  }
}

export function getResultHelp(result: boolean) {
  switch (result) {
    case true:
      return 'bg-red-500 text-white border border-red-500 border-2 font-bold'
    case false:
      return 'bg-gray-600/70 text-gray-800 border border-gray-800 border-2 font-light'
    default:
      return ''
  }
}
