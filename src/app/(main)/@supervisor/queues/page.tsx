'use client'
import React, { useState, useEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Column, initialData } from '@/components/queues'

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

      const res = await fetch('https://eelvchlistncf6uejbr3orwmje0cijqe.lambda-url.us-east-1.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: draggableId,
          target_route: destination.droppableId,
        }),
      }).then((res) => res.json())
      console.log(res)

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
    setState(newState)
  }

  useEffect(() => {
    const getQueues = async () => {
      const res: any = await fetch('https://fgl72sxlnfrbucwz2uo647cv7y0jaxlr.lambda-url.us-east-1.on.aws/', {
        method: 'GET',
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
        },
      }).then((res) => res.json())

      const queues: any = {}

      Object.keys(res)
        .filter((key: string) => key == 'Bookings' || key == 'Cancellations' || key == 'Information')
        .forEach((key: string) => {
          queues[key] = {
            id: key,
            title: key,
            route_id: res[key].rout_id,
            taskIds: Object.keys(res[key].agents).map((agentKey) => res[key].agents[agentKey].id),
          }
        })

      const tasks: any = Object.keys(res).reduce((acc, key) => {
        const queue = res[key]
        const agents = Object.keys(queue.agents).map((agentKey) => queue.agents[agentKey])
        const agentTasks = agents.map((agent) => {
          return {
            id: agent.id,
            content: agent.username,
          }
        })
        return {
          ...acc,
          ...agentTasks.reduce((acc, task) => {
            return {
              ...acc,
              [task.id]: task,
            }
          }, {}),
        }
      }, {})

      setState((prev: any) => {
        return {
          columns: queues,
          tasks: tasks,
          columnOrder: prev.columnOrder,
        }
      })
    }

    getQueues()
    const interval = setInterval(() => getQueues(), 10000)

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
            <p className="text-lg animate-pulse">Fetching queues (lambda is slow)...</p>
          </div>
        </div>
      )}
    </DragDropContext>
  )
}
