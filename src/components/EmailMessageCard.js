import * as React from 'react';
import Card from '@mui/material/Card';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import styles from './EmailMessageCard.styles';

export default function EmailMessageCard({ 
  message, defaultExpanded, onReply, onReplyAll, onForward, onDiscard, onEscalate
}) {
  const [expanded, setExpanded] = React.useState(defaultExpanded),
    handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <Card style={styles.wrapperEmailMessageCard}>
      <CardHeader
        message={message}
        expanded={expanded}
        setExpanded={setExpanded}
        onReply={onReply}
        onReplyAll={onReplyAll}
        onForward={onForward}
        onDiscard={onDiscard}
        onEscalate={onEscalate}
      />
      <CardBody contentPreview={message.contentPreview} expanded={expanded} onClick={expanded ? null : handleExpandClick}>
        <div dangerouslySetInnerHTML={{ __html: message.content }}></div>
      </CardBody>
    </Card>
  );
}
