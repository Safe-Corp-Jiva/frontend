import { listContactLensEvents } from '@/graphql/queries'
import { BellIcon } from '@heroicons/react/24/solid'
import { generateClient } from 'aws-amplify/api'
import { useEffect, useState } from 'react'

type NotificationProps = {
  isOpen: boolean
  setModal: () => void
}

export const Notifications: React.FC<NotificationProps> = ({ isOpen, setModal }) => {
  const handleClick = () => {
    setModal()
  }

  return (
    <div
      onClick={handleClick}
      className={
        'w-11 h-11 hover:bg-black/10 rounded-lg p-1.5 cursor-pointer text-SCJ-dark-primary' +
        (isOpen ? ' bg-black/10' : '')
      }
    >
      <BellIcon />
    </div>
  )
}

export const NotificationModal: React.FC<NotificationProps> = ({ isOpen, setModal }) => {
  const [notifications, setNotifications] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (!isOpen) return
    const getNotifications = async () => {
      const client = generateClient()
      const response = await client.graphql({
        query: listContactLensEvents,
        variables: {
          limit: 20,
        },
      })
      const notifs = response.data.listContactLensEvents.items.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      setNotifications(notifs)
      setIsLoading(false)
    }
    getNotifications()
  }, [isOpen])

  const handleClickOut = () => {
    setModal()
  }

  return (
    <div className="flex flex-col shadow-lg  w-full z-0 left-20 absolute">
      <div className="w-[35%] flex overflow-scroll flex-col h-screen p-2 shadow-lg z-0 absolute bg-SCJ-gray">
        {notifications.map((notification) => {
          return (
            <div
              key={notification.id}
              className="p-3 mb-2 h-48 bg-SCJ-dark-primary/70 hover:bg-SCJ-dark-primary hover:scale-[1.01] text-SCJ-gray border border-gray-300 rounded-lg shadow-sm"
            >
              <div className="flex justify-between">
                <p className="text-md font-bold">{notification.ruleName}</p>
                <p className="text-sm font-light">{new Date(notification.createdAt).toLocaleTimeString()}</p>
              </div>
              <p className="text-sm">{notification.actionName}</p>
              <p className="text-xs">{new Date(notification.createdAt).toLocaleDateString()}</p>
            </div>
          )
        })}
        {isLoading && (
          <>
            <div className="p-3 mb-2 h-40 bg-SCJ-dark-primary/70 hover:bg-SCJ-dark-primary hover:scale-[1.01] text-SCJ-gray border border-gray-300 rounded-lg shadow-sm animate-pulse">
              <div className="flex justify-between items-center">
                <div className="h-6 bg-gray-400 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-16"></div>
              </div>
              <div className="mt-4 h-4 bg-gray-400 rounded w-2/3"></div>
              <div className="mt-4 h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="p-3 mb-2 h-40 bg-SCJ-dark-primary/70 hover:bg-SCJ-dark-primary hover:scale-[1.01] text-SCJ-gray border border-gray-300 rounded-lg shadow-sm animate-pulse">
              <div className="flex justify-between items-center">
                <div className="h-6 bg-gray-400 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-16"></div>
              </div>
              <div className="mt-4 h-4 bg-gray-400 rounded w-2/3"></div>
              <div className="mt-4 h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="p-3 mb-2 h-40 bg-SCJ-dark-primary/70 hover:bg-SCJ-dark-primary hover:scale-[1.01] text-SCJ-gray border border-gray-300 rounded-lg shadow-sm animate-pulse">
              <div className="flex justify-between items-center">
                <div className="h-6 bg-gray-400 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-16"></div>
              </div>
              <div className="mt-4 h-4 bg-gray-400 rounded w-2/3"></div>
              <div className="mt-4 h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </>
        )}
      </div>
      <div onClick={handleClickOut} className="w-full h-screen bg-black bg-opacity-50"></div>
    </div>
  )
}
