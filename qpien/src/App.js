import React from 'react';
import Header from './components/Header/Header' 
import Channels from './components/Channels/Channels'
import Chat from './components/Chat/Chat'

function App() {
  return (
    <div className="App">
      <Header />
      <Channels />
      <Chat />
    </div>
  );
}

export default App;
