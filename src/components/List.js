import React, { useState } from 'react';
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render';
import AddButton from './AddButton';
import ListHeader from './ListHeader';
import ListCard, { CreateTaskCard } from './ListCard';

export default function List(props) {
  const [isCreating, setIsCreating] = useState(false);
  const { item } = props;
  const task = 'Apply gredient colours on the dashboard sidenav';
  const addTask = () => setIsCreating(true);
  const toggle = () => setIsCreating(false);

  return (
    <div className="wrapper">
      <ListHeader title={item} />
      <AddButton onClick={addTask} />
      <ShouldRender if={isCreating}>
        <CreateTaskCard onClick={toggle} />
      </ShouldRender>
      <ListCard dueDate="Aug 8" task={task} />
    </div>
  )
}
