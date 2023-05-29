import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies'
import PageNotFound from './Pages/404/404'
import MovieDetails from './Routes/Movie_details/movie_details'
import Tv from './Pages/Tv/tv'
import TvDetails from './Routes/Tv_details/tv_details'
import PeopleDetails from './Routes/People_details/people_details'
import Layout from './Layout/layout'
import { useContext } from 'react'
import { ThemeContext } from './Context/theme_context'
import People from './Pages/People/people'
import Search from './Pages/Search/search'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${theme}`}>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/movie'>
            <Route index element={<Movies />} />
            <Route path=':uid' element={<MovieDetails />} />
          </Route>
          <Route path='/tv'>
            <Route index element={<Tv />} />
            <Route path=':uid' element={<TvDetails />} />
          </Route>
          <Route path='/person'>
            <Route index element={<People />} />
            <Route path=':uid' element={<PeopleDetails />} />
          </Route>
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
