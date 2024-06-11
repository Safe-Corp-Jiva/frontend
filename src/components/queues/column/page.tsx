import React from 'react'
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'
import Task from '../task/page'
import { Task as TaskType, Column as ColumnType } from '../types/index'

interface ColumnProps {
  column: ColumnType
  tasks: TaskType[]
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <div className="m-2 border border-gray-300 rounded w-56 flex flex-col">
      <h3 className="p-2">{column.title}</h3>
      <Droppable droppableId={column.route_id}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`p-2 transition-colors duration-200 ${
              snapshot.isDraggingOver ? 'bg-blue-200' : 'bg-white'
            } flex-grow min-h-[100px]`}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column
