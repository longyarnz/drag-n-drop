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

    case 'SHUFFLE_LIST':
      const {context: { source, destination }} = action;
      if (!destination) return state;

      else if (source.droppableId === destination.droppableId) {
        const list = [...state[source.droppableId]];
        const [dragged] = list.splice(source.index, 1);
        list.splice(destination.index, 0, dragged);
        return { ...state, [source.droppableId]: list }
      }
      
      else {
        const from = [...state[source.droppableId]];
        const to = [...state[destination.droppableId]];
        const [dragged] = from.splice(source.index, 1);
        to.splice(destination.index, 0, dragged);
        return { ...state, [source.droppableId]: from, [destination.droppableId]: to}
      }
      
    default:
      return state;
  }
}