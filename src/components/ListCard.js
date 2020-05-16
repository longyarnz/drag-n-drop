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
          <img key={i} src={src} alt="task" />
        )}
      />
    </div>
  );
}

export function CreateTaskCard({ onClick }) {
  const submitTask = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      const task = e.target.value;
      console.log(task);
      onClick();
    }
  }

  return (
    <div className="list-card">
      <textarea name="task" placeholder="New task" onKeyDown={submitTask} />
    </div>
  )
}

export default function ListCard(props) {
  const { task, dueDate, index, id } = props;

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
            <span>{task}</span>
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