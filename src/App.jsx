import { Route, Routes } from "react-router-dom"
import AboutPage from "./component/AboutPage"
import HomePage from "./component/HomePage"
import MenuBar from "./component/Navbar/MenuBar"
import Counter from "./component/Counter"
import News from "./pages/NewsPage/News"
import Article1 from "./component/Article1"


function App() {

  return (
    <>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/news" element={<News />}>
          <Route path="article" element={<Article1/>} />
        </Route>
          
      </Routes>
    </>
  )
}

export default App
