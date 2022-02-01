import * as React from 'react';

import styles from './CardBody.styles'

export default function CardBody({ contentPreview, expanded, children, onClick }) {
  return (
    <div onClick={onClick} style={styles.wrapperCardBody}>
      {expanded ? children : contentPreview}
    </div>
  );
}