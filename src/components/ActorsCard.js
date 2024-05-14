import React from "react"

function ActorsCard ({name,movies}) {
  return(
      <article>
        <h2>{name}</h2>  
        <ul>
          <li>{movies}</li>
        </ul>
      </article>
  )
}

export default ActorsCard