import { Route, Routes } from "react-router-dom"
import AboutPage from "./component/AboutPage"
import HomePage from "./component/HomePage"
import MenuBar from "./component/Navbar/MenuBar"
import Counter from "./component/Counter"
import News from "./pages/NewsPage/News"
import Article1 from "./component/Article1"
import Article2 from "./component/Article2"
import Lecture4 from "./component/Lecture4"


function App() {

  return (
    <>
      <MenuBar/>
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/lecture4" element={<Lecture4 />} />

        <Route path="/news" element={<News />}>
          <Route path="article1" element={<Article1/>}>
            <Route path="article2" element={<Article2/>} />
          </Route>
        </Route>
          
      </Routes>
    </>
  )
}

export default App
