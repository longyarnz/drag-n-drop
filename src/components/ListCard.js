import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils'

function PhotoStack() {
  const images = ['/head.png', '/head.png', '/head.png', '/head.png'];

  return (
    <div className="photo-stack">
      <FlatList
        list={images}
        listView={(src, i) => (
          <img key={i} src={src} alt="task executors" />
        )}
      />
    </div>
  );
}

export function CreateTaskCard(props) {
  const { finish, list, dispatch } = props;

  const createTask = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      const { value } = e.target;
      const task = {
        desc: value,
        dueDate: 'Aug 8',
        id: `${Math.random()}`
      }
      const action = {
        list, task,
        type: 'CREATE_TASK',
      }
      dispatch(action);
      console.table(action);
      finish();
    }
  }

  return (
    <div className="list-card">
      <textarea placeholder="New task" onKeyDown={createTask} />
    </div>
  )
}

export default function ListCard(props) {
  const { desc, dueDate, index, id } = props;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className="list-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <span>{desc}</span>
            <i className="material-icons">more_horiz</i>
          </div>

          <div>
            <i className="material-icons">schedule</i>
            <span>Due {dueDate}</span>
            <PhotoStack />
          </div>
        </div>
      )}
    </Draggable>
  )
}