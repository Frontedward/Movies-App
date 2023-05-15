import React, { useEffect, useState } from "react"
import { selectGenres } from "../../../store/reducers/genres-reducer"
import { useAppSelector } from "../../../store/hooks"
import { Tag } from "antd"

const MovieTags = props => {
  const [genres, setGenres] = useState([])
  const allGenres = useAppSelector(selectGenres)
  const { genreIds } = props

  useEffect(() => {
    const filteredGenres = allGenres.filter(genre => {
      return genreIds.includes(genre.id)
    })

    setGenres(filteredGenres)
  }, [allGenres, genreIds])

  const genreElements = genres.map(genre => {
    return <Tag key={genre.id}>{genre.name}</Tag>
  })

  return <div className="movie-card__tags">{genreElements}</div>
}

export default MovieTags
