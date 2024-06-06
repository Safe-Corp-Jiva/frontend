'use client'

import { onHelpClick } from './hooks'
import { TriangleAlert } from 'lucide-react'

interface HelpButtonProps {
  callId: string
}
export const HelpButton = ({ callId }: HelpButtonProps) => (
  <button
   onClick={onHelpClick(callId, true)}
   className="size-16 bg-SCJ-primary rounded-full flex justify-center items-center hover:bg-SCJ-primary/80 cursor-pointer"
  >
    <TriangleAlert size={32} color="white" />
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