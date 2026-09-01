import { Outlet } from "react-router-dom"

function News() {
  return (
      <>
          <h1>News Page</h1>
          <Outlet/>
      </>
  )
}

export default News