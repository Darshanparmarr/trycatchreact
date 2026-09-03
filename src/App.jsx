import { Route, Routes } from "react-router-dom"
import AboutPage from "./component/AboutPage"
import HomePage from "./component/HomePage"
import MenuBar from "./component/Navbar/MenuBar"
import Counter from "./component/Counter"
import News from "./pages/NewsPage/News"
import Article1 from "./component/Article1"
import Article2 from "./component/Article2"
import Lecture from "./component/Lecture"
import Lecture5ViewDetails from "./pages/Lecture/Lecture5ViewDetails"


function App() {

  return (
    <>
      <MenuBar/>
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/view-details/:id" element={<Lecture5ViewDetails />} />

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
