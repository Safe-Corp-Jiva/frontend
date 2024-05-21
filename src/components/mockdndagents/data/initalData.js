const initialData = {
  tasks: {
    'agent-1': { id: 'agent-1', content: 'Agent John Doe' },
    'agent-2': { id: 'agent-2', content: 'Agent Jane Doe' },
    'agent-3': { id: 'agent-3', content: 'Agent John Wick' },
    'agent-4': { id: 'agent-4', content: 'Agent Saitama' },
    'agent-5': { id: 'agent-5', content: 'Agent Rodrigo Nuñez' },
    'agent-6': { id: 'agent-6', content: 'Agent Fer Cantu' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Booking',
      taskIds: ['agent-1', 'agent-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Cancelations',
      taskIds: ['agent-2', 'agent-5'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Information',
      taskIds: ['agent-3', 'agent-6'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
}

export default initialData
