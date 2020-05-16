import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render';
import AddButton from './AddButton';
import ListHeader from './ListHeader';
import ListCard, { CreateTaskCard } from './ListCard';
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils';

export default function List(props) {
  const [isCreating, setIsCreating] = useState(false);
  const { title, store } = props;
  const [state] = store;
  const addTask = () => setIsCreating(true);
  const toggle = () => setIsCreating(false);

  return (
    <div className="wrapper">
      <ListHeader title={title} />

      <AddButton onClick={addTask} />

      <ShouldRender if={isCreating}>
        <CreateTaskCard onClick={toggle} />
      </ShouldRender>

      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <div className="drop-region" ref={provided.innerRef}>
            <FlatList
              list={state[title]}
              listView={(card, index) => (
                <ListCard
                  id={card.id}
                  key={card.id}
                  index={index}
                  task={card.task}
                  dueDate={card.dueDate}
                />
              )}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
