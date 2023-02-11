import React from 'react'

const Button = () => {
  return (
    <div className='b'>
        <button className='btn' type="button">See All</button>
    </div>
  )
}

export default React.memo(Button);
