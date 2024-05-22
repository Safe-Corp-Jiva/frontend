import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { Task as TaskType } from '../types/index';
import { CircleUser } from 'lucide-react';

interface TaskProps {
  task: TaskType;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`border border-gray-300 rounded p-2 mb-2 bg-white flex gap-2 select-none ${snapshot.isDragging ? 'bg-green-200' : ''}`}
        >
          <CircleUser size={24} color="#434D75" strokeWidth={1} />
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
