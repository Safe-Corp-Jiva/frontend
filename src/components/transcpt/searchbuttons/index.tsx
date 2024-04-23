'use client'
import React from 'react'
import FlagIconSearch from '../icons/FlagIconSearch'
import CalendarIcon from '../icons/CalendarIcon'
import IdIcon from '../icons/IdIcon'
import FingerPrintIcon from '../icons/FingerPrintIcon'

export default function SearchButtons({
  text,
  fn,
  className,
  classNameIcon,
}: {
  text: string
  fn: () => void
  className?: string
  classNameIcon?: string
}) {
  const IconSelector = (type: string) => {
    switch (type) {
      case 'Flag':
        return <FlagIconSearch className={classNameIcon} />
      case 'Date':
        return <CalendarIcon className={classNameIcon} />
      case 'Id':
        return <IdIcon className={classNameIcon} />
      case 'Name':
        return <FingerPrintIcon className={classNameIcon} />
      default:
        return null
    }
  }

  return (
    <div className={'flex gap-2 ' + className} onClick={fn}>
      {IconSelector(text)}
      {text}
    </div>
  )
}
