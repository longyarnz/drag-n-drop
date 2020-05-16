import React from 'react'

export default function ListHeader(props) {
  const { title } = props;

  return (
    <header className="list-header">
      <h4>{title}</h4> 
      <i className="material-icons">more_horiz</i>
    </header>
  )
}
