'use client'
import React, { useState, useEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Column, initialData } from '@/components/queues'
import { getQueues, updateQueue } from '@/api/queues'

interface Agents {
  [key: string]: {
    id: string
    status: string
    username: string
  }
}

interface Queue {
  rout_id: string
  rout_name: string
  agents: Agents
}

export default function Page() {
  const [state, setState] = useState<any>(initialData)

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }
    const start = Object.keys(state.columns)
      .map((key) => state.columns[key])
      .find((column) => column.route_id === source.droppableId)
    const finish = Object.keys(state.columns)
      .map((key) => state.columns[key])
      .find((column) => column.route_id === destination.droppableId)

    if (!start || !finish) {
      console.error('Start or finish column is undefined')
      return
    }

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      }

      setState(newState)

      return
    }

    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }

    try {
      await updateQueue(draggableId, destination.droppableId)
    } catch (error) {
      console.error(error)
    }
    setState(newState)
  }

  useEffect(() => {
    // We check for localStorage to avoid fetching the queues on first render
    if (localStorage.getItem('queues')) {
      setState((prev: any) => {
        return {
          ...prev,
          ...JSON.parse(localStorage.getItem('queues') as string),
        }
      })
    }
    // fetch queues every 10 seconds and update the state
    const handleQueueGet = async () => {
      const myQueues = await getQueues()
      localStorage.setItem('queues', JSON.stringify(myQueues))
      setState((prev: any) => {
        return {
          ...prev,
          ...myQueues,
        }
      })
    }
    handleQueueGet()
    const interval = setInterval(() => handleQueueGet(), 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex p-6 w-full h-full justify-evenly ">
        {state?.columnOrder?.map((columnId: string) => {
          const column = state?.columns?.[columnId]
          const tasks = column?.taskIds?.map((taskId: string) => state?.tasks?.[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </div>
      {state === initialData && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg animate-pulse">Fetching queues...</p>
          </div>
        </div>
      )}
    </DragDropContext>
  )
}
