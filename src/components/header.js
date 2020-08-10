import React from "react"

export default function Cabeçalho(props) 
{
  // return <h1>Este é um cabeçalho. <span role="img" aria-label="sheep">🐑</span></h1>
  return (
    <h1>
      {props.headerText}{" "}
      <span role="img" aria-label="caf´">
        ☕
      </span>
    </h1>
  )
}
