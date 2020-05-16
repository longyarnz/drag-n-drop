import React from 'react'

export default function AddButton({ active, onClick }) {
  const style = {
    color: active ? 'red' : null
  }

  return (
    <button className="add-button" onClick={onClick}>
      <i className="material-icons" style={style}>
        {active ? 'remove' : 'add'}
      </i>
    </button>
  )
}
