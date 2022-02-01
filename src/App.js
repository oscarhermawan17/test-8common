import React, { useState } from 'react'

import { emailMessage } from './data/data';
import EmailMessageCard from './components/EmailMessageCard';


function App() {
  const [messages, setMessages] = useState(emailMessage)

  return (
    <>
      { /** 
       * more_horiz
       * 1. Reply: reply
       * 2. Reply all: reply_all
       * 3. Forward
       * 5. Discard : do_not_disturb
       */}

      {messages.map(({ id, dateTimeCreated, from, to, cc, contentPreview, content, defaultExpanded }) => (
        <div style={{ marginTop: 10 }} key={id}>
          {console.log(messages[0].content)}
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
