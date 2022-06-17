// Code Keypad Component Here

// create a Keypad React component.

// In that component, render an input with the right type.

// On that input, add an event handler that listens for the change event. => onChange

// When that event fires, use console.log to print out the text 'Entering password...'.

export default function Keypad() {

  const eventHandlerChange = () => {
    console.log('Entering password...');
  }

  return(

    <input
    placeholder="Enter password"
    type="password"
    onChange={eventHandlerChange}></input>

  )
}