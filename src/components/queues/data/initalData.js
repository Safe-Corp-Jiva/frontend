const initialData = {
  tasks: {},
  columns: {
    Bookings: {
      id: 'Bookings',
      title: 'Bookings',
      taskIds: [],
    },
    Cancellations: {
      id: 'Cancellations',
      title: 'Cancellations',
      taskIds: [],
    },
    Information: {
      id: 'Information',
      title: 'Information',
      taskIds: [],
    },
  },

  columnOrder: ['Bookings', 'Cancellations', 'Information'],
}

export default initialData
