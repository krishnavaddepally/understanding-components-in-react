import React from 'react';
import Picture from './Picture';
import Numbers from './Numbers';

const Wrapper = props => {
  let pictureUrl="https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png"
  let numbers="todays numbers/dates are..."
  return (
    <div className='box wrapper'>
      <h1>I Am the Wrapper</h1>
      {props.heading}
      {props.para}
      <p>

      </p>
      <Numbers num={numbers}/>
      <Picture  url={pictureUrl}/>

    </div>
  )
}

export default Wrapper;
