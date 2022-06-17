// Code EyesOnMe Component Here

// create a EyesOnMe React component.

// render a button with the text 'Eyes on me'.

// On that button, add event handlers that listen for the focus and blur events.

// When the focus event fires, use console.log to print out the text 'Good!'.

// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.


export default function EyesOnMe() {
  const eventHandlerBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  const eventHandlerFocus = () => {
    console.log('Good!');
  }

  return(

    <button
    onFocus={eventHandlerFocus}
    onBlur={eventHandlerBlur}>Eyes on me</button>

  )
}