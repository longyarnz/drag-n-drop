import React, { useReducer } from 'react';
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils';
import List from './components/List';
import { reducer, initialState } from './store'
import './App.css';

function App() {
  const store = useReducer(reducer, initialState);
  const taskLists = Object.keys(store[0]);

  return (
    <div className="App">
      <FlatList
        list={taskLists}
        listView={(item, index) => (
          <List key={index} item={item} store={store} />
        )}
      />
    </div>
  );
}

export default App;
