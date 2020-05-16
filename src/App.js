import React, { useReducer } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils';
import List from './components/List';
import { reducer, initialState } from './store'
import './App.css';

function App() {
  const store = useReducer(reducer, initialState);
  const listTitles = Object.keys(store[0]);
  const shuffleState = context => {
    const [, dispatch] = store;
    dispatch({
      context,
      type: 'SHUFFLE_LIST',
    });
  }

  return (
    <DragDropContext onDragEnd={shuffleState}>
      <div className="App">
        <FlatList
          list={listTitles}
          listView={(title, index) => (
            <List key={index} title={title} store={store} />
          )}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
