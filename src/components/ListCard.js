import React from 'react'
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

export default function ListCard(props) {
  const { task, dueDate } = props;

  return (
    <div className="list-card">
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
  )
}

export function CreateTaskCard() {
  const submitTask = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      const task = e.target.value;
      console.log(task);
    }
  }

  return (
    <div className="list-card">
      <textarea name="task" placeholder="New task" onKeyDown={submitTask} />
    </div>
  )
}