import * as React from 'react';

import ActionButton from './ActionButton';
import HeaderToAndCcComponent from './HeaderComponent/HeaderToAndCcComponent';
import HeaderFromComponent from './HeaderComponent/HeaderFromComponent';
import HeaderDateComponent from './HeaderComponent/HeaderDateComponent';
import styles from './CardHeader.styles'

export default function CardHeader({ 
  message, expanded, setExpanded, onReply, onReplyAll, onForward, onDiscard, onEscalate
}) {
  return (
    <div style={styles.wrapperCardHeader}>
      <div style={styles.isExpand(expanded)}>
        <div>
          <HeaderFromComponent from={message.from} expanded={expanded} setExpanded={setExpanded}/>
          <HeaderDateComponent dateTimeCreated={message.dateTimeCreated} expanded={expanded} setExpanded={setExpanded}/>
        </div>
        <div>
        {expanded && 
          <ActionButton
            onReply={onReply}
            onReplyAll={onReplyAll}
            onForward={onForward}
            onDiscard={onDiscard}
            onEscalate={onEscalate}
          />}
        </div>
      </div>
      
      {expanded && <HeaderToAndCcComponent title={'To '} recipient={message.to} setExpanded={setExpanded}/>}
      {message.cc.length > 0 && expanded && <HeaderToAndCcComponent title={'Cc '}recipient={message.cc} setExpanded={setExpanded}/>}
    </div>
  );
}