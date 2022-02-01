import React from 'react'

import { messages } from './data/data';
import EmailMessageCard from './components/EmailMessageCard';


function App() {
  return (
    <>
      {messages.map(({ id, dateTimeCreated, from, to, cc, contentPreview, content, defaultExpanded }) => (
        <div style={{ marginTop: 10 }} key={id}>
          <EmailMessageCard
            message={{
              id,
              dateTimeCreated,
              from,
              to,
              cc,
              contentPreview,
              content,
            }}
            defaultExpanded={defaultExpanded}
            onReply={(message) => console.log("onReply", message)}
            onReplyAll={(message) => console.log("onReplyAll", message)}
            onForward={(message) => console.log("onForward", message)}
            onDiscard={(message) => console.log("onDiscard", message)}
            onEscalate={(message) => console.log("onEscalate", message)}
          />
        </div>
      ))} 
    </>
  );
}

export default App;