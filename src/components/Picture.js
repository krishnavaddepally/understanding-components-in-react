import React from 'react';
import List from './List';
const Picture = props => {
  return (
    <div className='box picture'>
      <h1>Look at This Picture</h1>
      <img alt='Clever EEs' src={props.url}/>
      <List/>
    </div>

  )
}

export default Picture;
