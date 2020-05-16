export const initialState = {
  Backlog: [
    {
      desc: '1. Apply gredient colours on the dashboard sidenav',
      dueDate: 'Aug 8',
      id: `${Math.random()}`
    },
    {
      desc: '2. Detach gredient colours on the dashboard sidenav',
      dueDate: 'Aug 8',
      id: `${Math.random()}`
    },
    {
      desc: '3. Release gredient colours on the dashboard sidenav',
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
    case 'CREATE_TASK':
      const { list, task } = action;
      const newList = state[list].concat(task);
      return { ...state, [list]: newList };
    default:
      return state;
  }
}