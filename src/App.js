
import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import './App.css';

import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import Boton from "./boton/Boton";

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Boton>
        
      </Boton>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </header>
    </div>
  );
}

export default App;