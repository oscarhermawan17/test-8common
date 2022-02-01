import * as React from 'react';

export default function HeaderDateComponent({ dateTimeCreated, expanded, setExpanded }) {
  const newDate = new Date(dateTimeCreated),
    dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    day = dayOfWeek[newDate.getDay()],
    date = newDate.getDate(),
    month = newDate.getMonth()+1,
    year = newDate.getFullYear(),
    time = newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
    stringFullDay = `${day} ${month}/${date}/${year} ${time}`;
    
  return (
    <div style={expanded ? { marginTop: 5 } : { float: 'right' }} onClick={() => setExpanded(!expanded)}>
      {stringFullDay}
    </div>
  );
}