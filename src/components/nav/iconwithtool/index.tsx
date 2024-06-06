'use client'
import React, { useState, useRef } from 'react'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingArrow,
  arrow,
  useTransitionStyles,
  useClick,
} from '@floating-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import {
  HomeIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'

import Link from 'next/link'

const IconWithTool = ({ icon, path, text }: any) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'right',
    middleware: [
      offset(24),
      flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  })
  const { isMounted, styles } = useTransitionStyles(context)
  const click = useClick(context, { ignoreMouse: true })
  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, {
    // If your reference element has its own label (text).
    role: 'tooltip',
  })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role, click])

  const pathname = usePathname()
  const isActive = (path: any) => {
    return pathname === path ? ' text-SCJ-primary' : 'text-SCJ-dark-primary'
  }
  // Switch case for icons
  const getIcon = (icon: any) => {
    switch (icon) {
      case 'Home':
        return (
          <Link href={path}>
            <HomeIcon className={`${isActive(path)} `} />
          </Link>
        )
      case 'Bell':
        return (
          <Link href={path}>
            <BellIcon className={`${isActive(path)} `} />
          </Link>
        )
      case 'Chat':
        return (
          <Link href={path}>
            <ChatBubbleLeftRightIcon className={`${isActive(path)} `} />
          </Link>
        )
      case 'Book':
        return (
          <Link href={path}>
            <BookOpenIcon className={`${isActive(path)} `} />
          </Link>
        )
      case 'Users':
        return (
          <Link href={path}>
            <UsersIcon className={`${isActive(path)} `} />
          </Link>
        )
      case 'UserRound':
        return (
          <Link href={path}>
            <UserCircleIcon className={`${isActive(path)} `} />
          </Link>
        )
      default:
        return (
          <Link href={path}>
            <HomeIcon className={`${isActive(path)} `} />
          </Link>
        )
    }
  }
  return (
    <>
      <div
        className="w-11 h-11 hover:bg-black/10 rounded-lg p-1.5 cursor-pointer"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {getIcon(icon)}
      </div>
      {isMounted && (
        <div
          ref={refs.setFloating}
          style={{ ...styles, ...floatingStyles }}
          {...getFloatingProps()}
          className="bg-SCJ-gray p-2 rounded-lg"
        >
          <FloatingArrow ref={arrowRef} context={context} fill="#F5F7FA" />
          <p>{text}</p>
        </div>
      )}
    </>
  )
}

export default IconWithTool
