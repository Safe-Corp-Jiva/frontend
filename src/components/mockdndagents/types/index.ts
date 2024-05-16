export interface Task {
  id: string
  content: string
}

export interface Column {
  id: string
  title: string
  taskIds: string[]
}

export interface InitialData {
  tasks: { [key: string]: Task }
  columns: { [key: string]: Column }
  columnOrder: string[]
}