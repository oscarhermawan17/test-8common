import * as React from 'react';

export default function HeaderDateComponent({ dateTimeCreated, expanded, setExpanded }) {
  const newDate = new Date(dateTimeCreated);
  var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = dayOfWeek[newDate.getDay()]
  const date = newDate.getDate()
  const month = newDate.getMonth()+1
  const year = newDate.getFullYear()
  const time = newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  const stringFullDay = `${day} ${month}/${date}/${year} ${time}`
  return (
    <div style={expanded ? {} : { float: 'right', marginTop: 10 }} onClick={() => setExpanded(!expanded)}>
      {stringFullDay}
    </div>
  );
}