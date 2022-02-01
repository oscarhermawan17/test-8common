import * as React from 'react';

import Text from '../Text'

export default function HeaderFromComponent({ from, expanded, setExpanded }) {
  return expanded ? (
    <Text
      onClick={() => setExpanded(false)}
      propStyle={{ fontWeight: 'bold' }}
      mainText={from.hasOwnProperty('name') ? `${from.name} (${from.email})` :  from.email} 
    />
  ) : (
    <Text
      onClick={() => setExpanded(true)}
      propStyle={{ fontWeight: 'bold' }}
      mainText={from.hasOwnProperty('name') ? from.name : from.email} 
    />
  )
}