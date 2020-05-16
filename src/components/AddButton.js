import React from 'react'

export default function AddButton({ onClick }) {
  return (
    <button className="add-button" onClick={onClick}>
      <i className="material-icons">add</i>
    </button>
  )
}
