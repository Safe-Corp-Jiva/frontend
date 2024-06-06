'use client'

import { onHelpClick } from './hooks'
import { TriangleAlert } from 'lucide-react'

interface HelpButtonProps {
  callId: string | null
}
export const HelpButton = ({ callId }: HelpButtonProps) => (
  <button
   onClick={callId ? onHelpClick(callId, true) : () => null}
   className={`size-20 bg-yellow-400 rounded-full w-10 h-10 flex justify-center items-center hover:bg-yellow-300 cursor-pointer ${callId ? '' : 'disabled'}`}
  >
    <TriangleAlert size={24} color="white" />
  </button>
)


/* Usage Example:

  import { HelpButton } from "/path/to/HelpButton"
  
  const PhoneView = () => {
    // some code with a callId / contactId

    return (
      <HelpButton callId={callId} />
    )
  }

*/