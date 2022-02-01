import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function HeaderFromComponent({ from, expanded, setExpanded }) {
  return expanded ? (
    <Typography sx={{ fontWeight: 'bold' }} onClick={() => setExpanded(false)}>
      {from.hasOwnProperty('name') ? `${from.name} (${from.email})` :  from.email}
    </Typography>
  ) : (
    <Typography sx={{ fontWeight: 'bold' }} onClick={() => setExpanded(true)}>
      {from.hasOwnProperty('name') ? from.name : from.email} 
    </Typography>
  )
}