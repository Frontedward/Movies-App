import React from "react"
import { format } from "date-fns"

function isValidDate(d) {
  return d instanceof Date && !isNaN(d)
}

const MovieReleaseDate = props => {
  const releaseDate = new Date(props.releaseDate)

  return (
      <p>{isValidDate(releaseDate) ? format(releaseDate, "PP") : "unknown"}</p>
  )
}

export default MovieReleaseDate
