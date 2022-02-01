import * as React from 'react';

import Text from './Text'

export default function CardBody({ contentPreview, defaultExpanded, children }) {

  return (
    <div style={{ padding: '0px 16px', fontSize: 14 }}>
      {defaultExpanded ? children : contentPreview}
    </div>
  );
}