import React from 'react';
import AddButton from './AddButton';
import ListHeader from './ListHeader';
import ListCard, { CreateTaskCard } from './ListCard';

export default function List(props) {
  const { item } = props;
  const task = 'Apply gredient colours on the dashboard sidenav';

  return (
    <div className="wrapper">
      <ListHeader title={item} />
      <AddButton />
      <CreateTaskCard />
      <ListCard dueDate="Aug 8" task={task} />
    </div>
  )
}
