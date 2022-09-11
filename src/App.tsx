import React from 'react';
import './App.css';

import Header from './components/header';
import ChatRoom from './components/pages/chatroom';

const App: React.FC<{}> = () => {

  return (
    <>
      <Header />
      <div className="w-full px-4 flex items-center justify-center flex-col mx-auto mt-3 lg:px-0">
        <ChatRoom />
      </div>
    </>
  );
};

export default App;
