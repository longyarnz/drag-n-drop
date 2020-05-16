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
  const [state, dispatch] = store;
  const toggle = () => setIsCreating(!isCreating);
  const onDragOverStyle = {
    background: 'rgba(229, 229, 229, .8)',
  }

  return (
    <div className="wrapper">
      <ListHeader title={title} />

      <AddButton active={isCreating} onClick={toggle} />

      <ShouldRender if={isCreating}>
        <CreateTaskCard
          finish={toggle}
          list={title}
          dispatch={dispatch}
        />
      </ShouldRender>

      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <div
            className="drop-region"
            ref={provided.innerRef}
            style={snapshot.isDraggingOver ? onDragOverStyle : null}
          >
            <FlatList
              list={state[title]}
              listView={(card, index) => (
                <ListCard
                  id={card.id}
                  key={card.id}
                  index={index}
                  desc={card.desc}
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
