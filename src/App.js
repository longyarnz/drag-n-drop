import React from 'react';
import './App.css';
import List from './components/List';
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils';

function App() {
  const taskLists = ['Backlog', 'Todo', 'In Progress', 'In Review', 'Done'];

  return (
    <div className="App">
      <FlatList
        list={taskLists}
        listView={(item, index) => (
          <List key={index} item={item} />
        )}
      />
    </div>
  );
}

export default App;
