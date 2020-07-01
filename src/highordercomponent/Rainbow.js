import React from 'react'

const Rainbow = (WrappedComonent) => {
  
  const colours = ['red', 'pink', 'oragne', 'blue', 'green', 'yellow']
  const randomColour = colours[Math.floor(Math.random() * 5)]
  const className = randomColour + '-text';

  return (props) => {
    return (
      <div className={className}>
        <WrappedComonent {...props} />
      </div>
    )
  }

}
export default Rainbow;