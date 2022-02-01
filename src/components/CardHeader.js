import * as React from 'react';

import Text from './Text'

export default function CardHeader({ message, defaultExpanded }) {
  console.log('message', message.to)

  return (
    <div style={{ padding: '0px 16px', fontSize: 14 }}>
      <div>
      </div>
      
      <div>
        <Text
          propStyle={{ fontWeight: 'bold' }}
          mainText={'To '} 
        />
          {message.to.map(({ name, email}) => (
            <>
              <Text mainText={name} propStyle={{ marginRight: 5 }}/>
              <Text mainText={email} propStyle={{ marginRight: 5 }} isEmail={true}/>
            </>
          ))}
      </div>
    </div>
  );
}