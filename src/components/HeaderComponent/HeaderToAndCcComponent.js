import * as React from 'react';

import Text from '../Text'

export default function HeaderToAndCcComponent({ title, recipient, setExpanded }) {
  return (
    <div onClick={() => setExpanded(false)}>
      <Text
        propStyle={{ fontWeight: 400 }}
        mainText={title} 
      />
        {recipient.map(({ name, email}) => (
          <React.Fragment key={email}>
            <Text mainText={name} propStyle={{ color: 'gray', marginRight: 5 }}/>
            <Text mainText={email} propStyle={{ color: 'gray', marginRight: 5 }} isEmail={true}/>
          </React.Fragment>
        ))}
    </div>
  );
}