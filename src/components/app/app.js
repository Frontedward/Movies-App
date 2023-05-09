import React from "react"
import Search from "../search/search"
import RatedMovies from "../rated-movies/rated-movies"
import ErrorMessage from "../error-message/error-message"
import { Tabs } from "antd"
import "./app.css"

const App = () => {
  const items = [
    {
      key: "1",
      label: "Search",
      children: <Search />
    },
    {
      key: "2",
      label: "Rated",
      children: <RatedMovies />
    }
  ]

  return (
      <div className="app">
        <ErrorMessage />
        <Tabs defaultActiveKey="1" items={items} centered={true} />
      </div>
  )
}

export default App
