import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const isInputUserTrue = number => number.from <= number.to && number.from > 0 && number.to > 0

const settingNumber = (value, target, setNumber, setFizzBuzzString) => {
  setFizzBuzzString('');
  setNumber(prevState => ({
    ...prevState,
    [target]: value
  }))
}

const onSubmit = (number, setFizzBuzzString) => {
  if(!isInputUserTrue(number)) {
    alert('Wrong Input, Input field on the left one must be smaller or equal than the right one, and both of them must higher than 0');
  
  }
  else {
    const tmpFizzBuzzArray = [];
    for(let i=number.from; i<=number.to; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        tmpFizzBuzzArray.push('Fizzbuzz')
      } else if(i % 3 === 0) {
        tmpFizzBuzzArray.push('Fizz')
      } else if(i % 5 === 0) {
        tmpFizzBuzzArray.push('Buzz')
      } else {
        tmpFizzBuzzArray.push(i)
      }
    }
    console.log('tmpFizzBuzzArray', tmpFizzBuzzArray);
    setFizzBuzzString(tmpFizzBuzzArray.join(', '))
  }
}

function Fizzbuzz() {
  const [number, setNumber] = useState({
    from: 0,
    to: 0,
  }),
    [fizzBuzzString, setFizzBuzzString] = useState('')
  
  return (
    <>
      <TextField id="outlined-from" label="Input number from (1)" variant="outlined" value={number.from} type="number" onChange={e => settingNumber(e.target.value, "from", setNumber, setFizzBuzzString)}/>
      <TextField id="outlined-to" label="Input number to" variant="outlined" value={number.to} type="number" onChange={e => settingNumber(e.target.value, "to", setNumber, setFizzBuzzString)}/>
      <Button 
        style={{ height: 55 }} variant="contained" color={isInputUserTrue(number) ? 'primary' : 'error'}
        onClick={() => onSubmit(number, setFizzBuzzString)}>Submit
      </Button>

      {fizzBuzzString && <div style={{ marginTop: 30 }}>
        {fizzBuzzString}
      </div>}
    </>
  );
}

export default Fizzbuzz;
