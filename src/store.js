export const initialState = {
  Backlog: [
    {
      task: '1. Apply gredient colours on the dashboard sidenav',
      dueDate: 'Aug 8',
      id: `${Math.random()}`
    },
    {
      task: '2. Detach gredient colours on the dashboard sidenav',
      dueDate: 'Aug 8',
      id: `${Math.random()}`
    },
    {
      task: '3. Release gredient colours on the dashboard sidenav',
      dueDate: 'Aug 8',
      id: `${Math.random()}`
    }
  ],
  Todo: [],
  'In Progress': [],
  'In Review': [],
  Done: []
}

export function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}